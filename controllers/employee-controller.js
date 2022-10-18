const EmployeeData = require('../models/employee-model');

module.exports = {
    getAllEmployees(req, res) {
        EmployeeData.find()
            .then((employee) => {
                console.log(employee)
                res.set('Content-Type', 'text/html');
                res.send({employee : employee})
            })
            .catch(function (error) {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send(error);
            })
    },

    getEmployeeById(req,res) {
        const id = req.params.id;

        EmployeeData.findById({_id : id})
            .then((employee) => {
                console.log(employee)
                res.send(employee);
            })
            .catch(function (error) {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send(error);
            })
    },

    addEmployee(req, res) {
        const id = req.body.id;
        const name = req.body.name;
        const lastname = req.body.lastname;
        const status = req.body.status;
        const address = req.body.address;
        const restaurantId = req.body.restaurantId;

        var newEmployee = {"_id" : id ,"name" : name, "lastname" : lastname, "address" : address, "status" : status, "restaurantId" : restaurantId}

        EmployeeData.create(newEmployee)
            .then((newEmployee) => {
                console.log(newEmployee);
                res.set('Content-Type', 'text/html');
                res.send("Employé ajouté")
            })
            .catch( (error) => {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send("Erreur lors de l'insertion")
            })
    },

    modifyEmployee(req, res) {
        const id = req.params.id;
        const update = req.body;

        EmployeeData.findByIdAndUpdate({_id : id}, 
            {$set:{
                name: update.name, 
                lastname : update.lastname,
                status : update.status,
                address: update.address, 
                restaurant_id: update.restaurant_id}}, 
                {new: true})
            .then((employee) => {
                console.log(employee)
                res.send(employee);
            })
            .catch(function (error) {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send(error);
            })
    },

    deleteEmployee(req, res) {
        const id = req.params.id;
        
        EmployeeData.findByIdAndDelete({_id : id})
            .then( () => {
                console.log("Employé: "+id+" supprimé");
                res.set('Content-Type', 'text/html');
                res.send("Employé: "+id+" supprimé");
            })
            .catch( (err) => {
                console.log(err);
                res.set('Content-Type', 'text/html');
                res.send(err);
            })
    }
}