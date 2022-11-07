const http = require('http');
const url = require('url');
const express = require('express')
const app = express()

const { Client } = require('pg')

const conn = new Client({
  host: "mouse.db.elephantsql.com",
  user: "gtelkgeo",
  database: "gtelkgeo",
  password: "FNMMLJNkOZn9P8BKKWLtol773KRhVf22",
  port: "5432"
})
conn.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
  });

//   let query="SELECT * FROM users";

//   conn.query(query, (err, result, field) =>{
//     console.log(err);
//     console.log(result);
//     //  console.log(field);
// });

app.get('/users', (req, res) => {
  conn.query('SELECT * FROM users', function (err, result) {
    if (err) {
        return console.error("Ошибка: " + err);
    }
    else {
      console.log(res);
    }
    res.send(rows)
    console.log(result);
  })
})

// client.end(function (err) {
//   if (err) {
//       return console.error("Ошибка: " + err);
//   }
//   else {
//       console.log("Off");
//   }
// });