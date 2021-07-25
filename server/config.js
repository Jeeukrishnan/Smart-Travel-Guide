var mysql = require ('mysql');

var mysqlRouter = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'travel',
});

mysqlRouter.connect (function (err) {
  if (!err) {
    console.log ('Database is connected ... \n\n');
  } else {
    console.log ('Error connecting database ... \n\n');
  }
});

var creds = {
  USER: 'USERNAME',
  PASS: 'PASSWORD',
};

module.exports = {mysqlRouter, creds};
