const ClientController = require('../controllers/client-controller.js');

module.exports = (server) => {
    server.get('/client/:id', function(req,res) {
        ClientController.getClientById(req, res)
    })
    
    server.post('/client', function(req,res) {
        ClientController.addClient(req, res)
    })

    server.put('/client/:id', function(req,res) {
        ClientController.modifyClient(req, res)
    })

    server.delete('/client/:id', function(req,res) {
        ClientController.deleteClient(req, res)
    })
}