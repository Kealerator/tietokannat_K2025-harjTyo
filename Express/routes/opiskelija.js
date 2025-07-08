const express = require('express');
const router = express.Router();
const opiskelija = require('../models/opiskelija_model');

router.get('/',
    function (req, res) {
        opiskelija.getAll(function (err, data) {
            if (err) {
                res.json(err);
            } else {
                console.log(data);
                res.json(data);
            }
        });
    }
);


router.get('/:id',
    function (req, res) {
        opiskelija.getById(req.params.id, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                console.log(data);
                res.json(data);
            }
        });
    }
);


router.post('/',
    function (req, res) {
        opiskelija.add(req.body, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                console.log(data);
                res.json(data);
            }
        });
    }
);

router.delete('/:id',
    function (req, res) {
        opiskelija.delete(req.params.id, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                console.log(data);
                res.json(data);
            }
        });
    }
);


router.put('/:id',
    function (req, res) {
        opiskelija.update(req.params.id, req.body, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                console.log(data);
                res.json(data);
            }
        });
    }
);

module.exports = router;