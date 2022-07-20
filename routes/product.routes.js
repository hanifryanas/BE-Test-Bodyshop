const router = require('express').Router();
const productController = require('../controllers/product.controller');

router.get('/carousel', productController.getCarousel);
router.get('/', productController.getProducts);
router.post('/:username/wishlist', productController.addWishlistProduct);

module.exports = router;