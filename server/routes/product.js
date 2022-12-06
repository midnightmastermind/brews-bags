const router = require('express').Router();
const product_controller = require('../controllers/product.controller');


// GET request for creating product. NOTE This must come before route for id (i.e. display product).
router.get('/create', product_controller.product_create_get);

// POST request for creating product.
router.post('/create', product_controller.product_create_post);
// POST request to update all products.
router.post('/update', product_controller.product_update);

// GET request to delete product.
router.get('/:id/delete', product_controller.product_delete_get);

// POST request to delete product.
router.post('/:id/delete', product_controller.product_delete_post);

// GET request to update product.
router.get('/:id/update', product_controller.product_update_get);

// POST request to update products
router.post('/:id/update', product_controller.product_update_post);

// GET request for one product.
router.get('/:id', product_controller.product_detail);


// GET request for list of all products.
router.get('/', product_controller.product);

module.exports = router;
