var express = require('express'),
  app = express(),
  port = process.env.PORT || 5050, 
  database = require('./api/config/database'),
  startup = require('./api/startup/startupProperty'),
  bodyParser = require('body-parser')
  boardRoutes = require('./api/routes/BoardRoutes'),
  listRoutes = require('./api/routes/ListRoutes'),
  cardRoutes = require('./api/routes/CardRoutes');


startup.createPropertyByDefault()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})

listRoutes(app)
boardRoutes(app)
cardRoutes(app)

app.listen(port, () => {
  console.log('Express server listening on port ' + port)
})