var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

var mongoose = require('mongoose');
var port = process.env.PORT || 5000;

//listen port
app.listen(port, ()=>{
    console.log("Server is running on port: " + port)
})

//connect mongoDB
const mongoRI = 'mongodb://localhost:27017/mernloginreg'

mongoose.connect(mongoRI, {useNewUrlParser: true})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))

//uses path
var Users = require('./routes/Users')

app.use('/users', Users)