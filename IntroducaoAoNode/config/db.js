var mysql = require('mysql');

var con = function(){
  return mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    port: 3306,
    database:'curso_node'
  });
};
console.log(con);

module.exports =con;
