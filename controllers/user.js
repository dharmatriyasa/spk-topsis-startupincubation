exports.getIndex = (req, res, next) =>{
    res.render('user/index', {
        title: 'Get Started',
        path: '/'
    });
}