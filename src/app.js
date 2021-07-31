const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express();

const dbconfig = { host: "localhost", user: "root", password: "mysql" };

app.get("/user-list", async (req, res) => {
  const connection = mysql.createConnection(dbconfig);
  await connection.connectAsync();

  const sql = `SELECT * from edac.user`;
  const list = await connection.queryAsync(sql);

  await connection.endAsync();

  res.json(list);
});

app.listen(4000, () => console.log("server starteddd...."));
