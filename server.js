var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

//define connection
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',//root for mac
    database: 'backend'
});

//listen port
var server = app.listen(4545, function () {
    var host = server.address().address
    var port = server.address().port
});

//connect mysql
con.connect(function (error) {
    if(error) console.log(error);
    else console.log("Connected");
});

//uses path
app.get('/users', function (req, res) {
    con.query('select * from users limit 0,50', function (error, rows, fields) {
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});

app.post('/register', function (req, res, next) {
    // con.query('select * from users where user');
    console.log(req.body);
    // console.log(req.body.username + " - " + req.body.password + " - " + req.body.confirmPassword);
});