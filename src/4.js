const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbconfig = { host: "localhost", user: "root", password: "mysql" };

async function addNewUser() {
  const connection = mysql.createConnection(dbconfig);
  await connection.connectAsync();

  // INSECURE :: HACABLE :: SQL INJECTION
  let sql = `insert into edac.user (username, password, email, mobile) 
                        values 
                        ('saurav', '@#@#@#', 'saurav@gmail.com', '23232232' )`;
  await connection.queryAsync(sql);

  console.log("User added success!!");

  connection.endAsync();
}

addNewUser();
