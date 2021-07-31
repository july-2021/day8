const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbconfig = { host: "localhost", user: "root", password: "mysql" };

async function addNewUser() {
  const connection = mysql.createConnection(dbconfig);
  await connection.connectAsync();

  // SQL INJECTION PROOF :: NOT HACKABLE.
  const sql = `insert into edac.user (username, password, email, mobile) values (?, ?, ?, ?)`;
  const params = ["akash", "@@#@#@#", "aksh@gmail.com", "2323232"];
  await connection.queryAsync(sql, params);

  console.log("RECORD ADDED");

  connection.endAsync();
}

addNewUser();
