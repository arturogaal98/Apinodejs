const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'sql9.freemysqlhosting.net',
  user: 'sql9340297',
  password: 'AiuXyrX5vT',
  database: 'sql9340297',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;

