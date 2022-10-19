class OrdersService {

    constructor({ Order }) {
        this.orderModel = Order;
    }

    async addOrder(data) {
        _order = new this.orderModel(data);
        await _order.save();

        return {
            message: `Order for client (${data.clientId}) commited successfully!`
        };
    }

    async getOrderByRestaurantId(paginationData, restaurantId) {
        let limit = paginationData.limit || 10;
        let page = paginationData.page || 0;

        let _orders = await this.orderModel.find({restaurantId: restaurantId})
            .limit(limit)
            .skip(limit * page);

        return {
            count: _orders.length,
            orders: _orders
        };
    }

    async getOrderById(orderId) {
        let _order = await this.orderModel.findById(orderId).exec();

        if(_order) {
            return {
                message: `Order ${orderId} found`,
                order: _order
            };
        } else {
            return {
                message: `Order ${orderId} not found`,
            };
        }
    }

    async setOrderStatus (orderId, data) {
        let _order = await this.orderModel.findById(orderId).exec();

        if (_order) {
            _order.orderStatus = data.orderStatus ? data.orderStatus : _order.orderStatus;
            _order.paymentStatus = data.paymentStatus ? data.paymentStatus : _order.paymentStatus;

            _order = await _employee.save();

            return {
                message: 'Order Status Successfully Updated!',
                _order: _order
            };
        } else {
            return {
                message: 'Failed! Order Not Found!'
            };
        }
    }
}

module.exports = OrdersService;
