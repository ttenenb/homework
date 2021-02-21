const debug = require('debug')('recipes:index');
var express = require('express');
var router = express.Router();
const pool = require('../pool');
/* GET home page. */
router.route('/')
    .get(function (req, res, next) {
        pool.query('SELECT name, category FROM recipes', (error, results, fields) => {
            if (error) {
                return res.sendStatus(500);
            }
            res.send(results);
        })
    })
    .post((req, res, next) => {
        pool.query('INSERT INTO recipes(name, category) VALUES(?, ?)',
            [req.body.name, req.body.category],
            (error, results, fields) => {
                if (error) {
                    return res.sendStatus(500)
                }
                req.body.id = results.insertId;
                res.status(201)
                    .location(`${req.baseUrl}/${req.body.id}`)
                    .send(req.body);
            })
    });

router.route('/:id')
    .get(function (req, res, next) {
        pool.query('SELECT * FROM recipes WHERE id = ?',
            [req.params.id],
            (error, results, fields) => {
                if (error) {
                    return res.sendStatus(500);
                }
                if (!results.length) {
                    return res.sendStatus(404);
                }
                res.send(results[0]);
            })
    })
    .put((req, res, next) => {
        pool.query('UPDATE recipes SET name = IFNULL(?,name), category = IFNULL(?,category) WHERE id = ?',
            [req.body.name, req.body.category, req.params.id],
            (error, results, fields) => {
                if (error) {
                    return res.sendStatus(500);
                }
                // debug(results);
                if (!results.affectedRows) {
                    return res.sendStatus(404);
                }
                res.sendStatus(204);
            })
    })
    .delete((req, res, next) => {
        pool.query('DELETE FROM recipes WHERE id = ?',
            [req.params.id],
            (error, results, fields) => {
                if (error) {
                    return res.sendStatus(500);
                }
                if (!results.affectedRows) {
                    return res.sendStatus(404);
                }
                res.sendStatus(204);
            })
    });

module.exports = router;
