const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

//Read Route
router.get('/', (req, res) => {
    postgres.query('SELECT * FROM tickets ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    });
});

//Create Route
router.post('/', (req, res) => {
    postgres.query(`INSERT INTO tickets (item, description, date) VALUES ('${req.body.name}', ${req.body.description}, ${req.body.current_date})`, (err, results) => {
        postgres.query('SELECT * FROM tickets ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

//Delete Route
router.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM tickets WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM tickets ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

//Update Route
router.put('/:id', (req, res) => {
    postgres.query(`UPDATE tickets SET name = '${req.body.name}', description = ${req.body.description}, date = ${req.body.date} WHERE id = ${req.params.id}`, (err, results) => {
        postgres.query('SELECT * FROM tickets ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

module.exports = router;
