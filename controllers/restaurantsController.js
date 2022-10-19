const { Restaurant } = require('../models');
const RestaurantsService = require('../services/RestaurantsService');
const restaurantsService = new RestaurantsService({ Restaurant });

const addRestaurant = async function(req, res, next) {

    let createRestaurantProcess = await restaurantsService.addRestaurant(req.body);

    return res.status(201).send(createRestaurantProcess);
};

const listRestaurants = async function(req, res, next) {

    let listRestaurantsProcess = await restaurantsService.listRestaurant();

    return res.status(200).send(listRestaurantsProcess);
};

const modifyRestaurant = async function(req, res, next) {

    let modifyRestaurantProcess = await restaurantsService.modifyRestaurant(req.params.id, req.body);

    return res.status(200).send(modifyRestaurantProcess);
};

const deleteRestaurant = async function(req, res, next) {

    let deleteRestaurant = await restaurantsService.deleteRestaurant(req.params.id);

    return res.status(200).send(deleteRestaurant);
};

module.exports = {
    addRestaurant,
    listRestaurants,
    modifyRestaurant,
    deleteRestaurant
}
