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
   console.log(req.body);
    postgres.query(`INSERT INTO tickets (item, description, dropoff_date) VALUES ('${req.body.item}', '${req.body.description}', NOW());`, (err, results) => {
        postgres.query('SELECT * FROM tickets ORDER BY tickets_id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

//Delete Route
router.delete('/:tickets_id', (req, res) => {
    postgres.query(`DELETE FROM tickets WHERE tickets_id = ${req.params.tickets_id};`, (err, results) => {
        postgres.query('SELECT * FROM tickets ORDER BY tickets_id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

//Update Route
router.put('/:tickets_id', (req, res) => {
    postgres.query(`UPDATE tickets SET item ='${req.body.item}', description ='${req.body.description}', status ='${req.body.status}', notes ='${req.body.notes}' WHERE tickets_id =${req.params.tickets_id}`, (err, results) => {
        postgres.query('SELECT * FROM tickets ORDER BY tickets_id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

module.exports = router;
