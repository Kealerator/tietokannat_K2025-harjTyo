const mysql = require('mysql2');

const myConnectionString = "mysql://netuser:netpass@localhost:3306/Opintorekisteri";
const connection = mysql.createConnection(myConnectionString);

module.exports = connection;