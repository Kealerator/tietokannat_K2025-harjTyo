const express = require('express');
const router = express.Router();
const opintojakso = require('../models/opintojakso_model');

router.get('/',
    function (req, res) {
        opintojakso.getAll(function (err, data) {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }
);

router.get('/:id',
    function (req, res) {
        opintojakso.getById(req.params.id, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }
);

router.post('/',
    function (req, res) {
        opintojakso.add(req.body, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }
);

router.delete('/:id',
    function (req, res) {
        opintojakso.delete(req.params.id, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }
);

router.put('/:id',
    function (req, res) {
        opintojakso.update(req.params.id, req.body, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }
);

module.exports = router;