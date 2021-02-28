var express = require('express');
const Cart = require('../cart');
var router = express.Router();
let cart;
/* GET home page. */
router.route('/')
  .get((req, res, next) => {
    cart = new Cart(req.session.cart ? req.session.cart.items : {});

    res.render('layout', { title: 'Express', partials: { content: 'index' }, items: global.items });
  })
  .post((req, res, next) => {
    // const cart = req.session.cart || new Cart();

    //3 - req.session.cart for some reason isnt a Cart its just an object. Has items but not Cart prototype... recreate Cart, passing in old items

    console.log('before add', cart);
    cart.addItem(req.body.id, +req.body.count);
    console.log('after add', cart);

    req.session.cart = cart;
    req.session.foo = 5;

    // 1 - added - we never ended the request so session cookie wasnt sent back
    res.redirect('/');
  });

router.get('/viewcart', (req, res, next) => {
  let cartItems, total;
  if (cart.items) {
    cartItems = global.items.filter(item => cart.items.hasOwnProperty(item.id));
    cartItems.map(item => item.count = cart.items[item.id]);
    cartItems.map(item => item.total = item.price * item.count);
    total = cartItems.reduce((accumulator, b) => accumulator + b.total, 0)
    console.log(total);
  }
  res.render('layout', { title: 'Express', partials: { content: 'cart' }, items: cartItems, total: total.toFixed(2) })
});

module.exports = router;
