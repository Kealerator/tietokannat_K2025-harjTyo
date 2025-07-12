const db = require('../database');

const opintojakso = {
    getAll: function (callback) {
        return db.query("SELECT * FROM Opintojakso", callback);
    },

    getById: function (id, callback) {
        return db.query("SELECT * FROM Opintojakso WHERE idOpintojakso = ?", [id], callback);
    },

    add: function (opintojaksoData, callback) {
        return db.query("INSERT INTO Opintojakso SET ?", opintojaksoData, callback);
    },

    delete: function (id, callback) {
        return db.query("DELETE FROM Opintojakso WHERE idOpintojakso = ?", [id], callback);
    },

    update: function (id, opintojaksoData, callback) {
        return db.query("UPDATE Opintojakso SET ? WHERE idOpintojakso = ?", [opintojaksoData, id], callback);
    }
};

module.exports = opintojakso;