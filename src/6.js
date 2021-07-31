const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbconfig = { host: "localhost", user: "root", password: "mysql" };

async function readAllUser() {
  const connection = mysql.createConnection(dbconfig);
  await connection.connectAsync();

  const sql = `SELECT * FROM edac.user`;
  const list = await connection.queryAsync(sql);
  console.log(list);

  connection.endAsync();
}

readAllUser();
