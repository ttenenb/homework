const express = require('express');
const router = express.Router();
const debug = require('debug')('contacts:route');

//Get home page
router.get('/', (req, res, next) => {
    db.query('SELECT * FROM contacts', (error, results, fields) => {
        res.render('layout', {
            title: 'Contacts',
            noContacts: !results.length,
            contacts: results,
            partials: { content: 'contacts' }
        });
    })

})

router.get('/addContact', (req, res, next) => {

    res.render('layout', {
        partials: { content: 'addContact' }
    });
})

router.get('/editContact/:id', (req, res, next) => {
    db.query('SELECT * FROM contacts WHERE id = ? LIMIT 1',
        [req.params.id],
        (error, results, fields) => {
            if (error) {
                return next(new Error(`Error occured. Could not find contact with id #${req.params.id} ${error.message}`))
            }
            if (!results.length) {
                next(new Error(`Can not find contact  ${req.params.id} ${error.message}`))
            }
            res.render('layout', {
                name: results[0],
                partials: { content: 'addPopulatedForm' }
            }
            )
        })

})

router.post('/addContact', function (req, res, next) {

    db.query('INSERT INTO contacts(firstName, lastName, email, phone) VALUES (?, ?, ?, ?)',
        [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
        (error, results, fields) => {
            if (error) {
                return next(new Error(`Unable to insert contact - ${error.message}`));
            }

            res.redirect('/contacts');
        });
});

router.post('/editContact/:id', (req, res, next) => {

    db.query('UPDATE contacts SET firstName = ?, lastName = ?, email = ?, phone = ? WHERE id = ?',
        [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.params.id],
        (error, results, fields) => {
            if (error) {
                next(new Error(`Could not update error ${error.message}`))
            }
            if (!results.affectedRows) {
                next(new Error(`Sorry, could not update contact with id # ${req.params.id}`))
            }
            res.redirect('/contacts');

        }
    )
})

router.get('/deleteContact/:id', (req, res, next) => {
    db.query('DELETE FROM contacts WHERE id = ?', [req.params.id],
        (error, results, fields) => {
            if (error) {
                next(new Error(`Could not delete contact with id # ${req.params.id} ${error.message}`))
            }
            if (!results.affectedRows) {
                next(new Error(`Could not delete contact ${req.params.id} ${error.message}`))
            }
            res.redirect('/contacts');
        })
})


router.get('/api/contacts', (req, res, next) => {
    db.query('SELECT * FROM contacts', (error, results, fields) => {
        if (error) {
            return next(new Error(`Unable to get contacts ${error.message}`))
        }
        res.json(results)
    })
})

router.post('/api/contacts', (req, res, next) => {
    
    db.query('INSERT INTO contacts(firstName, lastName, email, phone) VALUES (?, ?, ?, ?)',
        [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
        (error, results, fields) => {
            if (error) {
                res.statusCode = 404;
                return res.send(); 
            }
            res.statusCode = 201;
            res.json(results.insertId)
        })
})

module.exports = router;