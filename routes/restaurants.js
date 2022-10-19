const express = require('express');
const router = express.Router();

const restaurantsController = require('../controllers/restaurantsController');

router.post('/restaurants', restaurantsController.addRestaurant);

router.get('/restaurants', restaurantsController.listRestaurants);

router.put('/restaurants/:id', restaurantsController.modifyRestaurant);

router.delete('/restaurants/:id', restaurantsController.deleteRestaurant);

module.exports = router;
