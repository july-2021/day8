const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const express = require("express");
const app = express();

const dbconfig = { host: "localhost", user: "root", password: "mysql" };

app.post("/user-create", async (req, res) => {
  const connection = mysql.createConnection(dbconfig);
  await connection.connectAsync();

  const sql = `insert into edac.user (username, password, email, mobile) values (?, ?, ?, ?)`;
  const params = ["aditya", "#@#@##", "aditya@gmail.com", "2323232"];

  await connection.queryAsync(sql, params);

  await connection.endAsync();

  res.json({ message: "User created Successfully" });
});

app.listen(4000, () => console.log("server starteddd...."));
