var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

sayhey = function (req, res) {
    try {
        res.send("Hello from NodeJS!")

    } catch (error) {
        res.status(500).send("Couldn't get data from file. " + error.message)
    }

}

// parse application/json
app.use(bodyParser.json())

app.get('/', sayhey);

var server = app.listen(4000, function () { });
console.log("Server is running on port 4000...")