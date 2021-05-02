const Alternatives = require('../models/alternatives');

exports.getDSSApp = (req, res, next) =>{
    Alternatives.fetchAllAlternatives()
        .then(([rows, fieldData]) => {
            res.render('user/dss-app', {
                alternative: rows,
                title: 'DSS Aplication',
                path: '/dss-app'
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
            res.redirect('/dss-app');          
        })
        .catch(err => console.log(err));
};

// exports.getViewAlternatives = (req, res, next) => {
//     Alternatives.fetchAllAlternatives()
//         .then(([rows, fieldData]) => {
//             console.log(rows.length);
//             res.render('user/dss-app', {
//                 alternative: rows,
//                 pageTitle: 'View Alternatives',
//                 path: '/dss-app/view-alternatives'
//             });
//         })
//         .catch(err => console.log(err));
// };