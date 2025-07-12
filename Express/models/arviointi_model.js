const db = require('../database');

const arviointi = {
    getAll: function (callback) {
        return db.query("SELECT * FROM Arviointi", callback);
    },

    getByOpiskelijaId: function (id, callback) {
        return db.query("SELECT * FROM Arviointi WHERE idOpiskelija = ?", [id], callback);
    },

    getByOpintojaksoId: function (id, callback) {
        return db.query("SELECT * FROM Arviointi WHERE idOpintojakso = ?", [id], callback);
    },

    getByOpiskelijaIdAndOpintojaksoId: function (idOpiskelija, idOpintojakso, callback) {
        return db.query(
            "SELECT * FROM Arviointi WHERE idOpiskelija = ? AND idOpintojakso = ?",
            [idOpiskelija, idOpintojakso],
            callback
        );
    },

    add: function (arviointiData, callback) {
        return db.query("INSERT INTO Arviointi SET ?", arviointiData, callback);
    },

    delete: function (idOpiskelija,idOpintojakso, callback) {
        return db.query("DELETE FROM Arviointi WHERE idOpiskelija = ? AND idOpintojakso = ?", [idOpiskelija, idOpintojakso], callback);
    },

    update: function (idOpiskelija, idOpintojakso, arviointiData, callback) {
        return db.query("UPDATE Arviointi SET ? WHERE idOpiskelija = ? AND idOpintojakso = ?", [arviointiData, idOpiskelija, idOpintojakso], callback);
    }
};

module.exports = arviointi;