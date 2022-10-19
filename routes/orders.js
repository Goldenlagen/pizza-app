const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/ordersController');

router.get('/orders/:id', ordersController.getOrderById)

router.get('/orders/restaurant/:id', ordersController.getOrderByRestaurantId)

router.put('/orders/:id', ordersController.setOrderStatus)

router.post('/orders', ordersController.addOrder)

module.exports = router;