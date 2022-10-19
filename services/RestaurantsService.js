class RestaurantsService {

    constructor({ Restaurant }) {
        this.restaurantModel = Restaurant;
    }

    async addRestaurant(data) {
        let _restaurant = await this.restaurantModel.findOne({
            name: data.name
        });

        if (_restaurant) {
            return {
                message: 'Failed! Restaurant already exists!'
            };
        } else {
            _restaurant = new this.restaurantModel(data);
            await _restaurant.save();

            return {
                message: `Restaurant (${data.name}) created successfully!`
            };
        }
    }

    async listRestaurant() {
        let _restaurants = await this.restaurantModel.find().exec();

        return {
            restaurants: _restaurants
        };
    }

    async modifyRestaurant (restaurantId, data) {
        let _restaurant = await this.restaurantModel.findById(restaurantId).exec();

        if (_restaurant) {
            _restaurant.name = data.name ? data.name : _restaurant.name;
            _restaurant.city = data.city ? data.city : _restaurant.city;

            _restaurant = await _restaurant.save();

            return {
                message: `Restaurant ${data.name} Updated Successfully!`,
                restaurant: _restaurant
            };
        } else {
            return {
                message: 'Failed! Restaurant Not Found!'
            };
        }
    }

    async deleteRestaurant(restaurantId) {
        await this.restaurantModel.findByIdAndRemove(restaurantId);

        return {
            message: 'Restaurant Deleted Successfully!'
        };
    }
}

module.exports = RestaurantsService;
