class PizzaServices {

    constructor({ Pizza }) {
        this.pizzaModel = Pizza;
    }

    async addPizza(data) {
        let _pizza = await this.pizzaModel.findOne({
            name: data.name
        });

        if (_pizza) {
            return {
                message: `Pizza (${data.name}) already exists`
            };
        } else {
            _pizza = new this.pizzaModel(data);
            await _pizza.save();

            return {
                message: `Pizza (${data.name}) registered successfully!`
            };
        }
    }

    async getAllPizza(paginationData) {
        console.log(this.pizzaModel)
        let limit = paginationData.limit || 10;
        let page = paginationData.page || 0;

        let searchQuery = {};

        if (paginationData.name) {
            searchQuery = {
                firstName: paginationData.name
            };
        }

        let _pizza = await this.pizzaModel.find(searchQuery)
            .limit(limit)
            .skip(limit * page);

        return {
            count: _pizza.length,
            pizzas: _pizza
        };
    }

    async getPizzaByName(pizzaName) {
        let _pizza = await this.pizzaModel.find({name: pizzaName}).exec();

        if(_pizza.length != 0) {
            return {
                message : `Pizza ${pizzaName} found`,
                pizza: _pizza
            }
        }

        else {
            return {
                message : `Pizza found ${pizzaName} not found`,
            }
        }
    }

    async modifyPizza (pizzaId, data) {
        let _pizza = await this.pizzaModel.findById(pizzaId).exec();

        if (_pizza) {
            _pizza.name = data.name ? data.name : _pizza.name;
            _pizza.ingredients = data.ingredients ? data.ingredients : _pizza.ingredients;
            _pizza.price = data.price ? data.price : _pizza.price;

            _pizza = await _pizza.save();

            return {
                message: 'Pizza Updated Successfully!',
                pizza: _pizza
            };
        } else {
            return {
                message: 'Failed! Pizza Not Found!'
            };
        }
    }

    async deletePizza(pizzaId) {
        await this.pizzaModel.findByIdAndRemove(pizzaId);

        return {
            message: 'Pizza Deleted Successfully!'
        };
    }
}

module.exports = PizzaServices;
