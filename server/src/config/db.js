const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "4c21e1fc-ea32-47c5-a530-a6d6eb86d71c.external.kr1.mysql.rds.nhncloudservice.com",
  user: "team3_Backend",
  password: "Hs1213!@",
  database: "bbb3",
});
console.log(process.env.USER);

db.connect((err) => {
  if (err) return console.error("error" + err.message);

  let createTableUsers = `CREATE TABLE IF NOT EXISTS users(
    id VARCHAR(30) PRIMARY KEY,
    uname VARCHAR(30) NOT NULL,
    pw VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
  );`;

  let createTableBoards = `CREATE TABLE IF NOT EXISTS boards(
    bid INT AUTO_INCREMENT PRIMARY KEY,
    u_id VARCHAR(30) NOT NULL,
    title VARCHAR(50) NOT NULL,
    textfield VARCHAR(255) NOT NULL,
    photoURL VARCHAR(255),
    enter_date DATETIME DEFAULT now(),
    FOREIGN KEY (u_id) REFERENCES users(id)
  );`;

  db.query(createTableUsers, (err, result) => {
    if (err) throw err;
  });
  db.query(createTableBoards, (err, result) => {
    if (err) throw err;
  });
});

module.exports = db;
