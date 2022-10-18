const PizzaController = require('../controllers/pizza-controller.js');
const bcrypt = require('bcryptjs')

module.exports = (server) => {
    server.get('/', function(req,res) {
        res.send('Accueil Pizzeria')
    })

    server.get('/pizzas', function(req,res) {
        PizzaController.getAllPizzas(req, res)
    })

    server.get('/pizza/:id', function(req,res) {
        PizzaController.getPizzaById(req, res)
    })
    
    server.post('/pizza', function(req,res) {
        PizzaController.addPizza(req, res)
    })

    server.put('/pizza/:id', function(req,res) {
        PizzaController.modifyPizza(req, res)
    })

    server.delete('/pizza/:id', function(req,res) {
        PizzaController.deletePizza(req, res)
    })
}