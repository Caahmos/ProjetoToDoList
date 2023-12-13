module.exports.middleware = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    console.log('Passei pelo middleware global');

    next();
}