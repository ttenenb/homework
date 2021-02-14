const express = require('express');
const router = express.Router();

let contacts = [
    // {
    //     firstName: 'Larry',
    //     lastName: 'Gold',
    //     phone: '2161232345',
    //     email: 'lgold@gmail.com',
    //     id: 1
    // }, {
    //     firstName: 'Pete',
    //     lastName: 'Smith',
    //     phone: '2162098323',
    //     email: 'psmith@gmail.com',
    //     id: 2
    // }
];
let id = 1;

//Get home page
router.get('/', (req, res, next) => {

    res.render('layout', {
        title: 'Contacts',
        noContacts: !contacts.length,
        contacts,
        partials: { content: 'contacts' }
    });
})

router.get('/addContact', (req, res, next) => {
    res.render('layout', {
        partials: { content: 'addContact' }
    });
})

router.get('/editContact/:id', (req, res, next) => {
    const name = contacts.filter(elem => elem.id === +req.params.id);
    res.render('layout', {
        name,
        partials: { content: 'addPopulatedForm' }
    });
})

router.post('/addcontact', (req, res, next) => {
    req.body.id = id++;
    contacts.push(req.body);
    res.redirect('/contacts');
})

router.post('/editContact/:id', (req, res, next) => {
    contacts = contacts.filter(elem => elem.id !== +req.params.id);
    req.body.id = +req.params.id;
    contacts.push(req.body);
    res.redirect('/contacts');
})

router.get('/deleteContact/:id', (req, res, next) => {

    contacts = contacts.filter(elem => elem.id !== +req.params.id);
    
    res.redirect('/contacts');
})

module.exports = router;