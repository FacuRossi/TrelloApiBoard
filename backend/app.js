var express = require('express')
var database = require('./config/database')
var startup = require('./startup/startupProperty')

var app = express()

startup.createPropertyByDefault()

module.exports = app