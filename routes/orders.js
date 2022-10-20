const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/ordersController');
const authEmployeeJwt = require('../middlewares/authEmployeeJwt');
const authClientJwt = require('../middlewares/authClientJwt');


router.get('/orders/:id', [authEmployeeJwt.verifyToken], ordersController.getOrderById)

router.get('/orders/restaurant/:id', [authEmployeeJwt.verifyToken], ordersController.getOrderByRestaurantId)

router.put('/orders/:id', [authEmployeeJwt.verifyToken], ordersController.setOrderStatus)

router.post('/orders', [authClientJwt.verifyToken], ordersController.addOrder)

module.exports = router;