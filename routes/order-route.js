const OrderController = require('../controllers/order-controller.js');

module.exports = (server) => {
    server.get('/orders', function(req,res) {
        OrderController.getAllOrders(req, res)
    })

    server.get('/order/:id', function(req,res) {
        OrderController.getOrder(req, res)
    })
    
    server.post('/order', function(req,res) {
        OrderController.addOrder(req, res)
    })

    server.put('/order/:id', function(req,res) {
        OrderController.setOrderPaymentStatus(req, res)
    })
}