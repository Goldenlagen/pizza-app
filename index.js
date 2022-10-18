const express = require('express')
const app = express()
const port = 3000

const routesPizza = require('./routes/pizza-route')
const routesRestaurant = require('./routes/restaurant-route')
const routesEmployee = require('./routes/employee-route')
const routesClient = require('./routes/client-route')
const routesOrder = require('./routes/order-route')

const bodyParser = require('body-parser');
const mongoose = require('mongoose')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('json spaces', 2);
app.set('view engine', 'ejs');

routesPizza(app)
routesRestaurant(app)
routesEmployee(app)
routesClient(app)
routesOrder(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  mongoose.connect('mongodb://localhost:27017/pizza_api_database');
  mongoose.connection
      .once('open', () => console.log("Connexion à MongoDB établie !"))
      .on('error', (error) => {
          console.warn('Warning', error);
      })
})

module.exports = app;
