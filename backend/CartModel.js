const mongoosh = require('mongoose');

const CartSchema = new mongoosh.Schema(
    {
        email: String,
        CartItemNo: Number,
    }
)

const CartModel = mongoosh.model('carts', CartSchema);

module.exports = CartModel;