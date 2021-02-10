const { json } = require('express');
var express = require('express');
var router = express.Router();
const http = require('http');

let contacts = ['Chaim', 'Shalom', 'Meir'];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('layout', { title: 'Contacts' });
});

router.get('/contacts', (req, res, next) => {
  res.render('layout', {
    title: 'Contacts',
    contacts: contacts,
    partials:{content: 'index'}
  })
})

router.get('/api/contacts', (req, res, next) => {
  res.json({ contacts: contacts });
})

router.post('/api/contacts', (req, res, next) => {
  contacts.push(req.body.name);
  res.send();
})

module.exports = router;