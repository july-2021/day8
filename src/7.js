const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbconfig = { host: "localhost", user: "root", password: "mysql" };

async function readByEmail() {
  const connection = mysql.createConnection(dbconfig);
  await connection.connectAsync();

  const sql = `select * from edac.user where email=?`;
  const params = ["saurav@gmail.com"];

  let list = await connection.queryAsync(sql, params);
  console.log(list);

  connection.endAsync();
}

readByEmail();
