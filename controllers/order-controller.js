const OrderData = require('../models/order-model');

module.exports = {
    getAllOrders(req, res) {
        OrderData.find()
            .then((order) => {
                console.log(order)
                res.set('Content-Type', 'text/html');
                res.send({order : order})
            })
            .catch(function (error) {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send(error);
            })
    },

    getOrder(req,res) {
        const id = req.params.id;

        OrderData.findById({_id : id})
            .then((order) => {
                console.log(order)
                res.send(order);
            })
            .catch(function (error) {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send(error);
            })
    },

    addOrder(req, res) {
        const id = req.body.id;
        const content = req.body.content;
        const paymentStatus = req.body.paymentStatus;
        const orderStatus = req.body.orderStatus;
        const clientId = req.body.clientId;
        const restaurantId = req.body.restaurantId;

        var newOrder = {
            "_id" : id,
            "content" : content,
            "paymentStatus" : paymentStatus, 
            "orderStatus" : orderStatus, 
            "clientId" : clientId,
            "restaurantId" : restaurantId
        }

        OrderData.create(newOrder)
            .then((newOrder) => {
                console.log(newOrder);
                res.set('Content-Type', 'text/html');
                res.send("Commande enregistrée")
            })
            .catch((error) => {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send("Erreur lors de l'insertion")
            })
    },

    setOrderPaymentStatus(req, res) {
        const id = req.params.id;
        const update = req.body;

        OrderData.findByIdAndUpdate({_id : id}, 
            {$set:{
                paymentStatus: update.paymentStatus, 
                orderStatus: update.orderStatus}}, 
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
    }
}