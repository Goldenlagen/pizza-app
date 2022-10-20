const { Client } = require('../models');
const ClientsService = require('../services/ClientsService');
const clientsServices = new ClientsService({ Client });

const addClient = async function(req, res, next) {
    let addClientProcess = await clientsServices.addClient(req.body);

    return res.status(201).send(addClientProcess);
};

const getClientById = async function(req, res, next) {
    let getClientByIdProcess = await clientsServices.getClientById(req.params.id);

    return res.status(200).send(getClientByIdProcess);
};

const listClients = async function(req, res, next) {
    let getClientByIdProcess = await clientsServices.listClients();

    return res.status(200).send(getClientByIdProcess);
};

const modifyClient = async function(req, res, next) {
    let modifyClientProcess = await clientsServices.modifyClient(req.params.id, req.body);

    return res.status(200).send(modifyClientProcess);
};

const deleteClient = async function(req, res, next) {
    let deleteClientProcess = await clientsServices.deleteClient(req.params.id);

    return res.status(200).send(deleteClientProcess);
};

const loginClient = async function(req, res, next) {
    let loginClientProcess = await clientsServices.loginClient(req.body);

    return res.status(200).send(loginClientProcess);
};

module.exports = {
    addClient,
    getClientById,
    modifyClient,
    deleteClient,
    listClients,
    loginClient
}
