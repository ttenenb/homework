var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

/* GET users listing. */
router.get('/', function (req, res, next) {
  (async () => {
    try {
      const response = await fetch('http://localhost:3000/api/contacts');
      const data = await response.json();
      console.log(data);
      res.render('layout', {
        title: 'Fetch',
        contacts: data.contacts,
        partials: { content: 'index' }
      });

     } catch (err) { console.error(err);}
  }) ()
});

module.exports = router;
