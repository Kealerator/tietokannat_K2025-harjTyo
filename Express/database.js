const mysql = require('mysql2');

// -- Voit muuttaa käyttäjän, salasanan, tai portin tähän --
const myConnectionString = "mysql://netuser:netpass@localhost:3306/Opintorekisteri";


const connection = mysql.createConnection(myConnectionString);

module.exports = connection;