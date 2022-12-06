const router = require('express').Router();
const service_controller = require('../controllers/service.controller');


// GET request for creating service. NOTE This must come before route for id (i.e. display service).
router.get('/create', service_controller.service_create_get);

// POST request for creating service.
router.post('/create', service_controller.service_create_post);
// POST request to update all services.
router.post('/update', service_controller.service_update);

// GET request to delete service.
router.get('/:id/delete', service_controller.service_delete_get);

// POST request to delete service.
router.post('/:id/delete', service_controller.service_delete_post);

// GET request to update service.
router.get('/:id/update', service_controller.service_update_get);

// POST request to update services
router.post('/:id/update', service_controller.service_update_post);

// GET request for one service.
router.get('/:id', service_controller.service_detail);


// GET request for list of all services.
router.get('/', service_controller.service);

module.exports = router;
