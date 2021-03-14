module.exports = (req,res, next) => {
    if (req.session.user) {
        return next();
    }
    res.status(401).end();
}