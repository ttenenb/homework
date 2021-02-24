var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', { title: 'Cookies' });
});

router.get('/login', (req, res, next) => {
  res.render('layout', { title: 'Cookies', partials: { content: 'form' } });
});

router.post('/login', (req, res, next) => {
res.redirect('/loggedin')})

router.use((req, res, next) => {
  const login = JSON.parse(req.cookies['login']);
  if (login.firstName && login.lastName) {
    next();
  }
  else {
    res.redirect('/login');
  }
});

router.get('/loggedin', (req, res, next) => {
  res.render('layout', { title: 'Cookies', partials: { content: 'loggedIn' } });
});

module.exports = router;
// module.exports = app;
