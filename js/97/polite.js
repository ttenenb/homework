module.exports = (req, res, next) => {
    const baseURL = 'http://' + req.headers.host + '/';
    const theUrl = new URL(req.url, baseURL);
    if (theUrl.searchParams.get('magicWord') === 'please') {
        next();
    } else {
        res.statusCode = 400;
        error = '<h2>Please be more polite and say please. :(</h2>';
        next(error);
    }
}