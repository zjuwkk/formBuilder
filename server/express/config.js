var mysql = require('mysql');

const mysqlconnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123455',
    database : 'formbuilder'
});

module.exports = {
    dbconn: mysqlconnection
}