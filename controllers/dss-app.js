exports.getDSSApp = (req, res, next) =>{
    res.render('user/dss-app', {
        title: 'DSS Aplication',
        path: '/dss-app'
    });
}