const express = require('express');
const router = express.Router();
const arviointi = require('../models/arviointi_model');



router.get('/',
    function (req, res) {
        arviointi.getAll(function (err, data) {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }
);

router.get('/:idOpiskelija',
    function (req, res) {
        arviointi.getByOpiskelijaId(req.params.idOpiskelija, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }
);

router.get('/opintojakso/:idOpintojakso',
    function (req, res) {
        arviointi.getByOpintojaksoId(req.params.idOpintojakso, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }
);


router.get('/:idOpiskelija/:idOpintojakso',
    function (req, res) {
        arviointi.getByOpiskelijaIdAndOpintojaksoId(req.params.idOpiskelija, req.params.idOpintojakso, function (err, data) {
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
        arviointi.add(req.body, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }
);

router.delete('/:idOpiskelija/:idOpintojakso',
    function (req, res) {
        arviointi.delete(req.params.idOpiskelija, req.params.idOpintojakso, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }
);

router.put('/:idOpiskelija/:idOpintojakso',
    function (req, res) {
        arviointi.update(req.params.idOpiskelija, req.params.idOpintojakso, req.body, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }
);
module.exports = router;