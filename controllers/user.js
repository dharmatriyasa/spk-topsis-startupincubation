exports.getIndex = (req, res, next) =>{
    res.render('user/index', {
        title: 'Home Page',
        path: '/'
    });
}