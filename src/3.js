const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbref = {
  host: "localhost",
  user: "root",
  password: "mysql",
};

async function dbConnectionCheck() {
  const connection = mysql.createConnection(dbref);

  // START CONNECTION
  await connection.connectAsync();

  // LOGIC WILL COME HERE>
  console.log("Connection Success");

  // END THE CONNECTION
  connection.endAsync();
}

dbConnectionCheck();
