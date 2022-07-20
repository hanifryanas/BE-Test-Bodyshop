const productServiceModel = require('../models/product.model');

class ProductController {
    static async getCarousel(req, res) {
        const carousel = await productServiceModel.getCarousel();
        (carousel) ? res.status(200).json(carousel) : 
        res.status(404).json({message: 'No carousel found'});
    }
    static async getProducts(req, res) {
        const products = await productServiceModel.getProducts();
        (products) ? res.status(200).json(products) : 
        res.status(404).json({message: 'No products found'});
    }
    static async addWishlistProduct(req, res) {
        const username = req.params.username;
        const { name, description, price, star, size, image } = req.body;
        const newProduct = {
            username,
            name,
            description,
            price,
            star,
            size,
            image
        };
        const product = await productServiceModel.findProductByName(name);
        if (product) {
            return res.status(400).json({
                message: 'Product already exists'
            });
        }
        else {
            const product = await wishlistServiceModel.findWishlistProductByName(name);
            if (!product) {
            productServiceModel.addWishlistProduct(newProduct)
            .then(() => {
                res.status(201).json({
                    message: 'Product created'
                });
            }).catch((err) => {
                res.status(500).json({
                    message: err
                });
            } );
        }   
        }
    }
}

module.exports = ProductController;