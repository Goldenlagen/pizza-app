const { Pizza } = require('./../models');
const PizzasService = require('./../services/PizzasService');
const pizzasServices = new PizzasService({ Pizza });

const getAllPizzas = async function(req, res, next) {
    let getAllPizzasProcess = await pizzasServices.getAllPizzas(req.query);

    return res.status(201).send(getAllPizzasProcess);
};

const getPizzaByName = async function(req, res, next) {
    let getPizzaByNameProcess = await pizzasServices.getPizzaByName(req.params.name);

    return res.status(200).send(getPizzaByNameProcess);
};

const addPizza = async function(req, res, next) {
    let addPizzaProcess = await pizzasServices.addPizza(req.body);

    return res.status(200).send(addPizzaProcess);
};

const modifyPizza = async function(req, res, next) {
    let updatePizzaProcess = await pizzasServices.modifyPizza(req.params.id, req.body);

    return res.status(200).send(updatePizzaProcess);
};

const deletePizza = async function(req, res, next) {
    let deletePizzaProcess = await pizzasServices.deletePizza(req.params.id);

    return res.status(200).send(deletePizzaProcess);
};

module.exports = {
    getAllPizzas,
    getPizzaByName,
    addPizza,
    modifyPizza,
    deletePizza
}
