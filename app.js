const { response } = require('express');
var express = require('express');
const { v4: uuidv4 } = require('uuid');
// const  MongoClient = require('./mongodb');

var app = express();
// MongoClient.main()
// .then(console.log)
// .catch(console.error)
// .finally(() => client.close());

app.get('/check-balance', function (req, res) {
    if(req.query && req.query.uuid){
        const val = Math.floor(1000 + Math.random() * 9000);
        const response = {
            message: "API check was succesfull",
            balance: val
        }
        res.status(200)
        res.json(response);

    }else {
        const errorResponse = {
            message: "UUID is not recognised"
        }
        res.status(403)
        res.json(errorResponse);
    }
 })

app.post('/generateUuid', function (req, res) {
    const response = { 
        uuid: uuidv4()
    }
    res.send(response);
 })

var server = app.listen(1337, function () {
   var host = 'localhost';
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})