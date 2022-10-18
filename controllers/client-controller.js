const bcrypt = require('bcryptjs');
const ClientData = require('../models/client-model');

module.exports = {
    getClientById(req,res) {
        const id = req.params.id;

        ClientData.findById({_id : id})
            .then((client) => {
                console.log(client)
                res.send(client);
            })
            .catch(function (error) {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send(error);
            })
    },

    addClient(req, res) {
        const id = req.body.id;
        const name = req.body.name;
        const lastname = req.body.lastname;
        const address = req.body.address;
        const phone = req.body.phone;
        const email = req.body.email;
        const password = req.body.password;

        bcrypt.genSalt(10, function (saltError, salt) {
            if (saltError) {
                throw saltError
            } else {
                bcrypt.hash(password, salt, function(hashError, hash) {
                if (hashError) {
                    throw hashError
                } else {
                    var newClient = {
                        "_id" : id,
                        "name" : name, 
                        "lastname" : lastname,
                        "address" : address,
                        "phone" : phone,
                        "email" : email,
                        "password" : hash
                    }
            
                    ClientData.create(newClient)
                        .then((newClient) => {
                            console.log(newClient);
                            res.set('Content-Type', 'text/html');
                            res.send("Employé ajouté")
                        })
                        .catch( (error) => {
                            console.log(error);
                            res.set('Content-Type', 'text/html');
                            res.send("Erreur lors de l'insertion")
                        })                
                  
                        // bcrypt.compare("123456", hash, function(err, res) {
                    //     console.log(res)
                    // });
                }
                })
            }
        })
    },

    modifyClient(req, res) {
        const id = req.params.id;
        const update = req.body;

        const hash = bcrypt.genSalt(10, function (saltError, salt) {
            if (saltError) {
                throw saltError
            } else {
                bcrypt.hash(update.password, salt, function(hashError, hash) {
                if (hashError) {
                    throw hashError
                } else {
                    return hash                    
                    // bcrypt.compare("123456", hash, function(err, res) {
                    //     console.log(res)
                    // });
                }
                })
            }
        })

        ClientData.findByIdAndUpdate({_id : id}, 
            {$set:{
                name: update.name, 
                lastname : update.lastname,
                address: update.address,
                phone : update.phone,
                email : update.email,
                password : hash}}, 
                {new: true})
            .then((client) => {
                console.log(client)
                res.send(client);
            })
            .catch(function (error) {
                console.log(error);
                res.set('Content-Type', 'text/html');
                res.send(error);
            })
    },

    deleteClient(req, res) {
        const id = req.params.id;
        
        ClientData.findByIdAndDelete({_id : id})
            .then( () => {
                console.log("Client: "+id+" supprimé");
                res.set('Content-Type', 'text/html');
                res.send("Client: "+id+" supprimé");
            })
            .catch( (err) => {
                console.log(err);
                res.set('Content-Type', 'text/html');
                res.send(err);
            })
    }
}