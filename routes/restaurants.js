const express = require('express');
const router = express.Router();

const restaurantsController = require('../controllers/restaurantsController');
const authJwt = require('../middlewares/authEmployeeJwt');

router.post('/restaurants', [authJwt.verifyToken], restaurantsController.addRestaurant);

router.get('/restaurants', restaurantsController.listRestaurants);

router.put('/restaurants/:id', [authJwt.verifyToken], restaurantsController.modifyRestaurant);

router.delete('/restaurants/:id', [authJwt.verifyToken], restaurantsController.deleteRestaurant);

module.exports = router;
