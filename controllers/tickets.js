const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

//Read Route
router.get('/', (req, res) => {
    postgres.query('SELECT * FROM tickets ORDER BY tickets_id ASC;', (err, results) => {
        res.json(results.rows)
    });
});

//Create Route
router.post('/', (req, res) => {
    postgres.query(`INSERT INTO tickets (item, description, date) VALUES ('${req.body.item}', '${req.body.description}', '${req.body.current_date}')`, (err, results) => {
        postgres.query('SELECT * FROM tickets ORDER BY tickets_id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

//Delete Route
router.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM tickets WHERE tickets_id = ${req.params.tickets_id};`, (err, results) => {
        postgres.query('SELECT * FROM tickets ORDER BY tickets_id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

//Update Route
router.put('/:id', (req, res) => {
    postgres.query(`UPDATE tickets SET item = '${req.body.item}', description = '${req.body.description}', date = '${req.body.date}' WHERE tickets_id = ${req.params.tickets_id}`, (err, results) => {
        postgres.query('SELECT * FROM tickets ORDER BY tickets_id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

module.exports = router;
