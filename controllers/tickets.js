const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

//Read Route
router.get('/', (req, res) => {
    postgres.query(`SELECT * FROM tickets ORDER BY tickets_id ASC;`, (err, results) => {
        res.json(results.rows)
    });
});
// add to query to only show items belonging to each specific user
// WHERE user_id = ${req.params.user_id}

//Create Route
router.post('/', (req, res) => {
   console.log(req.body);
    postgres.query(`INSERT INTO tickets (item, description, dropoff_date, user_id) VALUES ('${req.body.item}', '${req.body.description}', NOW(), ${req.body.user_id});`, (err, results) => {
        postgres.query('SELECT * FROM tickets ORDER BY tickets_id ASC;', (err, results) => {
            res.json({message:'Item successfully added', data: results.rows})
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
