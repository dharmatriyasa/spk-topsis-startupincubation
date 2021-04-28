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

exports.getViewAlternatives = (req, res, next) => {
    Alternatives.fetchAllAlternatives()
        .then(([rows, fieldData]) => {
            console.log(rows.length);
            // res.render('user/dss-app', {
            //     alternative: rows,
            //     pageTitle: 'View Alternatives',
            //     path: '/dss-app/view-alternatives'
            // });
        })
        .catch(err => console.log(err));
};