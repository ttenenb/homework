const app = require('connect')();

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    next()
});

// app.use((req, res, next) => {
//     const baseURL = 'http://' + req.headers.host + '/';
//     const theUrl = new URL(req.url, baseURL);
//     if (theUrl.searchParams.get('magicWord') === 'please') {
//         next();
//     } else {
//         res.statusCode = 400;
//         error = '<h2>Please be more polite and say please. :(</h2>';
//         next(error);
//     }
// })

app.use(require('./polite.js'))

app.use((error, req, res, next) => {
    res.end(error)
})
app.use('/home', (req, res, next) => {
    res.end('<h1>Welcome to Connect</h1>')
})
app.use('/about', (req, res, next) => {
    res.end('<h1>Connect is nice!</h1>')
})

app.listen(80);