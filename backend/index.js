var mysql = require('mysql'); 
var express = require('express');
var cors = require('cors');
var con = require('./db_connect');

const app = express();
app.use(cors());
const port = 8000;

app.get('/users', (req, res) => {
  
    const querry = "SELECT * FROM customers";
    
    con.query(querry, function (err, result, fields) {
      if (err) throw err;

      //? convert result from raw data to JSON
      var objs = [];
      for (var i = 0; i < result.length; i++) {
        objs.push({
          id: result[i].id,
          username: result[i].name,
          address: result[i].address
        });
      }

      //! return the array from mysql in JSON format 
      return res.send(Object.values(objs));
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))