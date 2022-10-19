class EmployeesService {

    constructor({ Employee }) {
        this.employeeModel = Employee;
    }

    async addEmployee(data) {
        let _employee = await this.employeeModel.findOne({
            email: data.email
        });

        if (_employee) {
            return {
                message: 'Failed! Email already in use!'
            };
        } else {
            _employee = new this.employeeModel(data);
            await _employee.save();

            return {
                message: `Employee (${data.email}) created successfully!`
            };
        }
    }

    async listEmployee(paginationData) {
        let limit = paginationData.limit || 10;
        let page = paginationData.page || 0;

        let searchQuery = {};

        if (paginationData.name) {
            searchQuery = {
                firstName: paginationData.name
            };
        }

        let _employees = await this.employeeModel.find(searchQuery)
            .limit(limit)
            .skip(limit * page);

        return {
            count: _employees.length,
            employees: _employees
        };
    }

    async modifyEmployee (employeeId, data) {
        let _employee = await this.employeeModel.findById(employeeId).exec();

        if (_employee) {
            _employee.firstName = data.firstName ? data.firstName : _employee.firstName;
            _employee.lastName = data.lastName ? data.lastName : _employee.lastName;
            _employee.password = data.password ? data.password : _employee.password;
            _employee.restaurant = data.restaurant ? data.restaurant : _employee.restaurant;

            _employee = await _employee.save();

            return {
                message: 'Employee Updated Successfully!',
                employee: _employee
            };
        } else {
            return {
                message: 'Failed! Employee Not Found!'
            };
        }
    }

    async deleteEmployee(employeeId) {
        await this.employeeModel.findByIdAndRemove(employeeId);

        return {
            message: 'Employee Deleted Successfully!'
        };
    }
}

module.exports = EmployeesService;
