const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    star: Number,
    size: String,
    image: String,
    liked: Boolean
});
const productModel = mongoose.model('product', productSchema);
const carouselSchema = new Schema({
    name: String,
    image: String
});
const carouselModel = mongoose.model('carousel', carouselSchema);
const wishlistSchema = new Schema({
    username: String,
    name: String,
    description: String,
    price: Number,
    star: Number,
    size: String,
    image: String,
    liked: Boolean
});
const wishlistModel = mongoose.model('wishlist', wishlistSchema);

class productServiceModel {
    static async getCarousel() {
        return await carouselModel.find();
    }
    static async getProducts() {
        return await productModel.find().limit(10);
    }
    static async findProductByName(name) {
        return await productModel.findOne({ name : name });
    }
    static async findWishlistProductByName(name) {
        return await wishlistModel.findOne({ name : name });
    }
    static async addWishlistProduct(newProduct) {
        return await wishlistModel.create(newProduct);
    }
}

module.exports = productServiceModel;