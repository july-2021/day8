// NEXT THREE LINES ARE EQUIVALENT TO import :: required
// FOR THE NEXT THREEE LINES :: REFERE BLUEBIRDJS :: DOCS
// http://bluebirdjs.com/docs/features.html
const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

async function dbConnectionCheck() {
  // LOGIC HERE TO ADD RECORD IN TABLE.
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
  });

  await connection.connectAsync();

  console.log("Connection Success");
}

dbConnectionCheck();
