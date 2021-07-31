const mysql = require("mysql");

const dbconfig = { host: "localhost", user: "root", password: "mysql" };
function readAllUser() {
  const connection = mysql.createConnection(dbconfig);

  connection.connect((err) => {
    const sql = `select * from edac.user`;
    connection.query(sql, (error, result) => {
      console.log(result);

      connection.end(() => {
        console.log("Connection closed.");
      });
    });
  });
}

readAllUser();
