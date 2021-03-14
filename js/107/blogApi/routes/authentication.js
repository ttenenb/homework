const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/register', (req, res, next) => {
  if (!req.body.name || !req.body.password) {
    return next(new Error('name and password are required'));
  }

  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }

    const user = {
      name: req.body.name,
      password: hash
    }

    global.users.insertOne(user);

    res.status(201).send(user);

  });
});

router.post('/login', async (req, res, next) => {
  let pw = await global.users.find({ name: req.body.name }, { password : 1, _id: 0 }).toArray();
  console.log(pw);

  bcrypt.compare(req.body.password, pw[0].password, function (err, result) {
    if (err) {
      return next(err)
    }
    console.log(req.body.password);
    if (!result) {
      return next(new Error('Invalid name and password'));
    }
    req.session.user = req.body.name;
    // return res.redirect('/');
    res.send('logged in');
  });
  // });
  // 
});
 
router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.end('logged out');
});

module.exports = router;
