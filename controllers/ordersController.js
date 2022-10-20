const { Order } = require('./../models');
const OrdersService = require('./../services/OrdersService');
const orderServices = new OrdersService({ Order });

const getOrderByRestaurantId = async function(req, res, next) {
    let getOrderByRestaurantIdProcess = await orderServices.getOrderByRestaurantId(req.body, req.params.id);

    return res.status(201).send(getOrderByRestaurantIdProcess);
};

const addOrder = async function(req, res, next) {
    let addOrderProcess = await orderServices.addOrder(req.body);

    return res.status(200).send(addOrderProcess);
};

const setOrderStatus = async function(req, res, next) {
    let setOrderStatusProcess = await orderServices.setOrderStatus(req.params.id, req.body);

    return res.status(200).send(setOrderStatusProcess);
};

const getOrderById = async function(req, res, next) {
    let getOrderByIdProcess = await orderServices.getOrderById(req.params.id);

    return res.status(200).send(getOrderByIdProcess);
};

module.exports = {
    getOrderByRestaurantId,
    addOrder,
    setOrderStatus,
    getOrderById
}
