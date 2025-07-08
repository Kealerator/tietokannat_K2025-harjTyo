const db = require('../database');

const opiskelija = {
    getAll: function (callback) {
        return db.query("SELECT * FROM Opiskelija", callback);
    },

    getById: function (id, callback) {
        return db.query("SELECT * FROM Opiskelija WHERE idOpiskelija = ?", [id], callback);
    },

    add: function (opiskelijaData, callback) {
        return db.query("INSERT INTO Opiskelija SET ?", opiskelijaData, callback);
    },

    delete: function (id, callback) {
        return db.query("DELETE FROM Opiskelija WHERE idOpiskelija = ?", [id], callback);
    },

    update: function (id, opiskelijaData, callback) {
        return db.query("UPDATE Opiskelija SET ? WHERE idOpiskelija = ?", [opiskelijaData, id], callback);
    }
};

module.exports = opiskelija;