const mongoosh = require('mongoose');

const ProductSchema = new mongoosh.Schema({
    id: Number,
    title: String,
    discount: Number,
    color: String,
    model: String,
    brand: String,
    description: String,
    price: Number,
    image: String,
    category: String,
})

const ProductModel = mongoosh.model('products', ProductSchema);

module.exports = ProductModel;