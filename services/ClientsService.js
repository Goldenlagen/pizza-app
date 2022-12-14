class ClientsService {

    constructor({ Client }) {
        this.clientModel = Client;
    }

    async addClient(data) {
        let _client = await this.clientModel.findOne({
            email: data.email
        });

        if (_client) {
            return {
                message: 'Failed! Email already in use!'
            };
        } else {
            _client = new this.clientModel(data);
            await _client.save();

            return {
                message: `Client (${data.email}) registered successfully!`
            };
        }
    }

    async getClientById(clientId) {
        let _client = await this.clientModel.findById(clientId).exec();

        if(_client) {
            return {
                message: `Client ${clientId} found !`,
                employee: _client
            };
        } else {
            return {
                message: `Client ${clientId} not found !`
            }
        }
    }

    async listClients() {
        let _clients = await this.clientModel.find().exec();

        return {
            clients: _clients
        };
    }

    async modifyClient (clientId, data) {
        let _client = await this.clientModel.findById(clientId).exec();

        if (_client) {
            _client.firstName = data.firstName ? data.firstName : _client.firstName;
            _client.lastName = data.lastName ? data.lastName : _client.lastName;
            _client.password = data.password ? data.password : _client.password;
            _client.phone = data.phone ? data.phone : _client.phone;
            _client.card_number = data.card_number ? data.card_number : _client.card_number;

            _client = await _client.save();

            return {
                message: 'Client Updated Successfully!',
                client: _client
            };
        } else {
            return {
                message: 'Failed! Client Not Found!'
            };
        }
    }

    async deleteClient(clientId) {
        await this.clientModel.findByIdAndRemove(clientId);

        return {
            message: 'Client Deleted Successfully!'
        };
    }

    async loginClient(data) {
        if (data.email && data.password) {
            let _employee = await this.clientModel.findOne({
                email: data.email
            }).exec();

            if (_employee) {
                let isPwdValid = _employee.comparePassword(data.password);

                if (isPwdValid) {
                    return {
                        data: _employee,
                        token: _employee.getJWT()
                    };
                } else {
                    return {
                        message: 'Password is not valid!'
                    };
                }
            } else {
                return {
                    message: 'User Not Found!'
                };
            }
        } else {
            return {
                message: 'Missing Data!!'
            };
        }
    }
}

module.exports = ClientsService;
