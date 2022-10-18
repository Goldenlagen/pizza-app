const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const routesFile = require('./routes/pizza_routnpe')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('json spaces', 2);
app.set('view engine', 'ejs');

routesFile(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
