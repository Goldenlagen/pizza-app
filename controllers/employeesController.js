const { Employee } = require('../models');
const EmployeesService = require('../services/EmployeesService');
const employeesServices = new EmployeesService({ Employee });

const addEmployee = async function(req, res, next) {
    let addEmployeeProcess = await employeesServices.addEmployee(req.body);

    return res.status(201).send(addEmployeeProcess);
};

const listEmployee = async function(req, res, next) {
    let listEmployeeProcess = await employeesServices.listEmployee(req.query);

    return res.status(200).send(listEmployeeProcess);
};

const modifyEmployee = async function(req, res, next) {
    let modifyEmployeeProces = await employeesServices.modifyEmployee(req.params.id, req.body);

    return res.status(200).send(modifyEmployeeProces);
};

const deleteEmployee = async function(req, res, next) {
    let deleteEmployeeProcess = await employeesServices.deleteEmployee(req.params.id);

    return res.status(200).send(deleteEmployeeProcess);
};

module.exports = {
    addEmployee,
    listEmployee,
    modifyEmployee,
    deleteEmployee
}
