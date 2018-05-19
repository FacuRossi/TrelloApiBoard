var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000, 
  database = require('./api/config/database'),
  startup = require('./api/startup/startupProperty'),
  bodyParser = require('body-parser')
  boardRoutes = require('./api/routes/BoardRoutes'),
  listRoutes = require('./api/routes/ListRoutes');


startup.createPropertyByDefault()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

listRoutes(app)
boardRoutes(app)

app.listen(port, () => {
  console.log('Express server listening on port ' + port)
})