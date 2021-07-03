const Alternatives = require('../models/alternatives');
const Criteria = require('../models/criteria');
const Topsis = require('../public/js/topsis');

exports.getDSSApp = (req, res, next) => {
    Criteria.fetchAllCriteria()
        .then(([rows, fieldData]) => {
            res.render('user/dss-app', {
                title: 'DSS Aplication',
                path: '/dss-app',
                criterias: rows
            });
        })
        .catch(err => console.log(err));
};

exports.postInputCriteria = (req, res, next) => {
    const criteriaName = req.body.criteria;
    const criteriaType = req.body.criteriaType;
    const weighting = req.body.weighting;
    let binaryCriteria = 0;

    if(criteriaType === 'Cost'){
        binaryCriteria = 0;
    }else{
        binaryCriteria = 1;
    }

    const criteria = new Criteria(null, criteriaName, binaryCriteria, weighting);
    criteria
        .save()
        .then(()=> {
            res.redirect('/dss-app/view-criteria');
        })
        .catch(err => console.log(err));
}

exports.getViewCriteria = (req, res, next) => {
    Criteria.fetchAllCriteria()
        .then(([rows, fieldData]) => {
            res.render('user/dss-app-criteria', {
                title: 'View Criteria',
                path: '/dss-app/view-criteria',
                criterias: rows,
            });
        })
        .catch(err => console.log(err));
}

exports.getInputAlternatives = (req, res, next) => {
    res.render('user/dss-app-input', {
        title: 'Input Alternatives',
        path: '/dss-app/input-alternatives'
    });
}

exports.getViewAlternatives = (req, res, next) =>{
    Alternatives.fetchAllAlternatives()
        .then(([rows, fieldData]) => {
            res.render('user/dss-app-view', {
                alternative: rows,
                title: 'DSS Aplication',
                path: '/dss-app/view-alternatives'
            });
        })
        .catch(err => console.log(err));
};

exports.getOutput = (req, res, next) => {
    Alternatives.fetchAllAlternatives()
        .then(([rows, fieldData]) => {
            res.render('user/dss-app-output', {
                title: 'Output',
                path: '/dss-app/output',
                alternative: rows
            });
        })
        .catch(err => console.log(err));
};

exports.postInputAlternatives = (req, res, next) => {
    // const id = null;
    const name = req.body.inputNama;
    const valC1 = req.body.inputC1;
    const valC2 = req.body.inputC2;
    const valC3 = req.body.inputC3;
    const valC4 = req.body.inputC4;
    const valC5 = req.body.inputC5;
    const groupId = req.body.groupId;
    // console.log(name, valC1,valC2, valC3, valC4, valC5, groupId);
    const alternative = new Alternatives(null, name, valC1,valC2, valC3, valC4, valC5, groupId);
    alternative
        .save()
        .then(() => {
            res.redirect('/dss-app/view-alternatives');          
        })
        .catch(err => console.log(err));
};

exports.postGenerateInput = (req, res, next) => {

    let alternatives = [];
    let criterias = [];
    let labelCriteria = [];
    let criteriaType = [];
    let criteriaWeight = [];
    let collumnLength = 0;
    let rowLength = 0;

    Alternatives.fetchAllAlternatives()
        .then(([rows, fieldData]) => {
            alternatives = rows;
            return alternatives;
        })
        .then((altr) => {
            alternatives = altr;
            Criteria.fetchAllCriteria()
                .then(([rows, fieldData]) => {
                    criterias = rows;
                    for(let criteria of criterias){
                        labelCriteria.push('C'+criteria.id_criteria);
                        criteriaType.push(criteria.type);
                        criteriaWeight.push(criteria.weighting);
                    }
                    // console.log(alternatives);
                    // console.log(labelCriteria);
                    // console.log(criteriaType);
                    // console.log(criteriaWeight);

                    collumnLength = alternatives.length;
                    rowLength = criterias.length;
                    // console.log(collumnLength, rowLength);
                    let criteriaValues = Topsis.twoDimArray(rowLength, collumnLength);
                    // console.log(criteriaValues);
                    for(let i = 0; i < collumnLength; i++){
                        for(let j = 0; j < rowLength; j++){
                            criteriaValues[j][i] = alternatives[i][labelCriteria[j]];
                        }
                    }
                    console.log(criteriaValues);
                    return criteriaValues;
                })
                .then((arrValues) => {
                    let matrixR = Topsis.calculateMatrixR(arrValues);

                    let matrixY = Topsis.calculateMatrixY(matrixR, criteriaWeight);

                    let aPlus = Topsis.calSolidPlus(matrixY, criteriaType);

                    let aMin = Topsis.calSolidMin(matrixY, criteriaType);

                    let dPlus = Topsis.calGapPlus(matrixY, aPlus);

                    let dMin = Topsis.calGapPlus(matrixY, aMin);

                    let valueV = Topsis.preferensiValue(dMin, dPlus);

                    console.log(valueV);

                    for(let i = 0; i < valueV.length; i++){
                        Alternatives.insertPreferensiValue(valueV[i], i+1);
                    }
                })
                .catch(err => console.log(err));
        })
        .then(()=>{
            setTimeout(()=>{
            res.redirect('/dss-app/output');        
            }, 3000);
        })
        .catch(err => console.log(err));
};