const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const createError = require('http-errors');
const pe = require('parse-error');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 3000;

app.use(logger('dev'));
app.use(express.json({limit: '800mb'}));
app.use(express.urlencoded({
    extended: false,
    limit: '800mb'
}));

// CORS
app.options("*", cors());
app.use(cors());

// Rate limite
app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
        message: 'You exceeded 100 request in 15 minutes',
        statusCode: 429
    })
);

app.get('/', (req, res) => {
    res.json({
        version: 'v1.0.0',
        status: true
    });
});

// Routes
const employees = require('./routes/employees');
const restaurants = require('./routes/restaurants');
const pizzas = require('./routes/pizzas');
const clients = require('./routes/clients');
const orders = require('./routes/orders');

app.use([pizzas, restaurants, employees, clients, orders])

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    let errorMessage = {};
    errorMessage.message = err.message;
    errorMessage.error = req.app.get('env') === 'development' ? err : {};

    errorMessage.status = err.status || 500;

    res.json(errorMessage);
});

app.listen(port, () => {
    console.log(`Server is starting on port ${port}`);
});

// Important because it prevents nodejs app from crashing
process.on('unhandledRejection', error => {
    console.error('Uncaught Error', pe(error));
});
