const EmployeeController = require('../controllers/employee-controller.js');

module.exports = (server) => {
    server.get('/employees', function(req,res) {
        EmployeeController.getAllEmployees(req, res)
    })

    server.get('/employee/:id', function(req,res) {
        EmployeeController.getEmployeeById(req, res)
    })
    
    server.post('/employee', function(req,res) {
        EmployeeController.addEmployee(req, res)
    })

    server.put('/employee/:id', function(req,res) {
        EmployeeController.modifyEmployee(req, res)
    })

    server.delete('/employee/:id', function(req,res) {
        EmployeeController.deleteEmployee(req, res)
    })
}