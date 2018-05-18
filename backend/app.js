var express = require('express')
var database = require('./config/database')
var startup = require('./startup/startupProperty')
var BoardController = require('./controller/BoardController');
var ListController = require('./controller/ListController');

var app = express()

startup.createPropertyByDefault()


app.use('/boards', BoardController);
app.use('/lists', ListController);

module.exports = app