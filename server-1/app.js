const { Client } = require('pg')
const http = require('http');
const url = require('url');
const detect = require('detect-port');
const express = require('express')
const app = express()


const conn = new Client({
  host: "mouse.db.elephantsql.com",
  user: "gtelkgeo",
  database: "gtelkgeo",
  password: "FNMMLJNkOZn9P8BKKWLtol773KRhVf22",
  port: "5432"
})

let query="SELECT * FROM users";

conn.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err), res.send('Error');
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено"), res.send('Succesfuly!');
    }
      conn.query(query, (err, result, field) =>{
        console.log(err);
        console.log(result);
        res.send('From connection')
});
  });

//   conn.query(query, (err, result, field) =>{
//     console.log(err);
//     console.log(result);
// });

// async function main() {
//   const conn = await Client.createConnection({
//     host: "mouse.db.elephantsql.com",
//     user: "gtelkgeo",
//     database: "gtelkgeo",
//     password: "FNMMLJNkOZn9P8BKKWLtol773KRhVf22",
//     port: "5432"
//   });

// }

// http.createServer(function (req, res) {
//   let urlParts = url.parse(req.url);
//   console.log('----------------');
//   console.log(urlParts.pathname);
// }).listen(4200);

app.get('/users', (req, res) => {
  res.send('Hi, Noda works!')
  conn.query(query, (err, result, field) =>{
    console.log(err);
    console.log(result)
  })
});

// detect(port)
//   .then(_port => {
//     if (port == _port) {
//       console.log(`port: ${port} was not occupied`);
//     } else {
//       console.log(`port: ${port} was occupied, try port: ${_port}`);
//     }
//   })
//   .catch(err => {
//     console.log(err);
//   });

// app.listen('my-shop-angular-one.vercel.app')
app.listen(4200)