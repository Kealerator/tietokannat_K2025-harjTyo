const express = require('express');
const router = express.Router();
const db = require('../database');

// Get all rows from the Suoritus view/table
router.get('/', function (req, res) {
    db.query('SELECT * FROM Suoritus', function (err, data) {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
});

// Optionally: Get by opiskelija ID
router.get('/opiskelija/:idOpiskelija', function (req, res) {
    db.query('SELECT * FROM Suoritus WHERE idOpiskelija = ?', [req.params.idOpiskelija], function (err, data) {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
});

// Optionally: Get by opintojakso ID
router.get('/opintojakso/:idOpintojakso', function (req, res) {
    db.query('SELECT * FROM Suoritus WHERE idOpintojakso = ?', [req.params.idOpintojakso], function (err, data) {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
});

module.exports = router;