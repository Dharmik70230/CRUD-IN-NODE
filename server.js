const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
var app = express();
const ejs = require('ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')


const studentcontroller = require('./Controller/Student.Controller')
app.use('/',studentcontroller)
app.listen(8080);