const PizzaData = require('../models/pizza-model');
const PizzaService = require('../services/pizza-service')

module.exports = {
    getAllPizzas(req, res) {
        PizzaData.find()
            .then( (pizza) => {
                console.log(pizza)
                res.set('Content-Type', 'text/html');
                res.send({pizza : pizza})
            })
            .catch(function (error) {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send(error);
            })
    },

    getPizzaById(req,res) {
        const id = req.params.id;

        PizzaData.findById({_id : id})
            .then((pizza) => {
                console.log(pizza)
                res.send(pizza);
            })
            .catch(function (error) {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send(error);
            })
    },

    addPizza(req, res) {
        const id = req.body.id;
        const name = req.body.name;
        const ingredients = req.body.ingredients;
        const price = req.body.price;

        console.log(req.body)

        var newPizza = {"_id" : id ,"name" : name, "ingredients": ingredients, "price": price}

        PizzaData.create(newPizza)
            .then((newPizza) => {
                console.log(newPizza);
                res.set('Content-Type', 'text/html');
                res.send("Pizza ajoutée")
            })
            .catch( (error) => {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send("Erreur lors de l'insertion")
            })
    },

    modifyPizza(req, res) {
        const id = req.params.id;
        const update = req.body;

        PizzaData.findByIdAndUpdate({_id : id}, 
            {$set:{
                name: update.name, 
                ingredients: update.ingredients, 
                price: update.price}}, 
                {new: true})
            .then((pizza) => {
                console.log(pizza)
                res.send(pizza);
            })
            .catch(function (error) {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send(error);
            })
    },

    deletePizza(req, res) {
        const name = req.params.id;
        
        PizzaData.findByIdDelete({_id : id})
            .then( () => {
                console.log("Pizza: "+name+" supprimée");
                res.set('Content-Type', 'text/html');
                res.send("Pizza: "+name+" supprimé");
            })
            .catch( (err) => {
                console.log(err);
                res.set('Content-Type', 'text/html');
                res.send(err);
            })
    }
}