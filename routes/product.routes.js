const router = require('express').Router();
const productController = require('../controllers/product.controller');
const Middleware = require('../middleware/checkAuth');

router.get('/carousel', productController.getCarousel);
router.get('/', productController.getProducts);
router.post('/:username/wishlist', Middleware.checkAuth, productController.addWishlistProduct);

module.exports = router;