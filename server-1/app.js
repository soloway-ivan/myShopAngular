const { Client } = require('pg')
const http = require('http');
const url = require('url');
const detect = require('detect-port');
const express = require('express')
const app = express()

const router = express.Router();
const PORT = "my-shop-angular-one.vercel.app";

const conn = new Client({
  host: "mouse.db.elephantsql.com",
  user: "gtelkgeo",
  database: "gtelkgeo",
  password: "FNMMLJNkOZn9P8BKKWLtol773KRhVf22",
  port: "5432"
})

let query="SELECT personid, firstname, lastname, city FROM users WHERE personid = 1;";
conn.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
      conn.query(query, (err, result, field) =>{
        console.log(err);
        console.log(result);
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
  conn.query(query, (err, result, field) =>{
  try {
    res.json({
      status: 200,
      message: 'Get data - OK',
      result: result.rows[0]
    });
    console.log('wow');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server')
  }
})
})


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
module.exports = router;
// app.listen('my-shop-angular-one.vercel.app')
app.listen(PORT, () => console.log(`Server is fine! ${PORT}`));