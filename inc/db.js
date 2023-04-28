const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'uzb4o9e2oe257glt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user:'gedkpr5stk6omx5n',
    database:'cf4gxwf77dwvuvmi',
    password:'kadk5g8t1k39a2yy'
});

module.exports = connection;