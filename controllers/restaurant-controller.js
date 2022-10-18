const RestaurantData = require('../models/restaurant-model');

module.exports = {
    getAllRestaurants(req, res) {
        RestaurantData.find()
            .then((restaurant) => {
                console.log(restaurant)
                res.set('Content-Type', 'text/html');
                res.send({restaurant : restaurant})
            })
            .catch(function (error) {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send(error);
            })
    },

    getRestaurantById(req,res) {
        const id = req.params.id;

        RestaurantData.findById({_id : id})
            .then((restaurant) => {
                console.log(restaurant)
                res.send(restaurant);
            })
            .catch(function (error) {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send(error);
            })
    },

    addRestaurant(req, res) {
        const id = req.body.id;
        const name = req.body.name;
        const address = req.body.address;
        const city = req.body.city;

        var newRestaurant = {"_id" : id ,"name" : name, "address": address, "city": city}

        RestaurantData.create(newRestaurant)
            .then((newRestaurant) => {
                console.log(newRestaurant);
                res.set('Content-Type', 'text/html');
                res.send("Restaurant ajouté")
            })
            .catch( (error) => {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send("Erreur lors de l'insertion")
            })
    },

    modifyRestaurant(req, res) {
        const id = req.params.id;
        const update = req.body;

        RestaurantData.findByIdAndUpdate({_id : id}, 
            {$set:{
                name: update.name, 
                address: update.address, 
                city: update.city}}, 
                {new: true})
            .then((restaurant) => {
                console.log(restaurant)
                res.send(restaurant);
            })
            .catch(function (error) {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send(error);
            })
    },

    deleteRestaurant(req, res) {
        const id = req.params.id;
        
        RestaurantData.findByIdAndDelete({_id : id})
            .then( () => {
                console.log("restaurant: "+name+" supprimé");
                res.set('Content-Type', 'text/html');
                res.send("Restaurant: "+name+" supprimé");
            })
            .catch( (err) => {
                console.log(err);
                res.set('Content-Type', 'text/html');
                res.send(err);
            })
    }
}