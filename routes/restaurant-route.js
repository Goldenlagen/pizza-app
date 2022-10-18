const RestaurantController = require('../controllers/restaurant-controller.js');

module.exports = (server) => {
    server.get('/restaurants', function(req,res) {
        RestaurantController.getAllRestaurants(req, res)
    })

    server.get('/restaurant/:id', function(req,res) {
        RestaurantController.getRestaurantById(req, res)
    })
    
    server.post('/restaurant', function(req,res) {
        RestaurantController.addRestaurant(req, res)
    })

    server.put('/restaurant/:id', function(req,res) {
        RestaurantController.modifyRestaurant(req, res)
    })

    server.delete('/restaurant/:id', function(req,res) {
        RestaurantController.deleteRestaurant(req, res)
    })
}