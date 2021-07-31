const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const cors = require("cors");
const express = require("express");
const app = express();

// MIDDLEWARE ::  TO READ THE DATA SEND BY POST API
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // ALLOWING ALL. || We can configure. THE IP ADDERESS, DOMAIN

const dbconfig = { host: "localhost", user: "root", password: "mysql" };

app.post("/user-create", async (req, res) => {
  const connection = mysql.createConnection(dbconfig);
  await connection.connectAsync();

  const { username, password, email, mobile } = req.body;
  const sql = `insert into edac.user (username, password, email, mobile) values (?, ?, ?, ?)`;
  const params = [username, password, email, mobile];

  await connection.queryAsync(sql, params);

  await connection.endAsync();

  res.json({ message: "User created Successfully" });
});

app.get("/user-list", async (req, res) => {
  const connection = mysql.createConnection(dbconfig);
  await connection.connectAsync();

  const sql = `SELECT * from edac.user`;
  const list = await connection.queryAsync(sql);

  await connection.endAsync();

  res.json(list);
});

app.listen(4000, () => console.log("server starteddd...."));
