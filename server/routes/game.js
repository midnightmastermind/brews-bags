const router = require('express').Router();
const user_controller = require('../controllers/user.controller');


// GET request for creating user. NOTE This must come before route for id (i.e. display user).
router.get('/create', user_controller.user_create_get);

// POST request for creating user.
router.post('/create', user_controller.user_create_post);
// POST request to update all users.
router.post('/update', user_controller.user_update);

// GET request to delete user.
router.get('/:id/delete', user_controller.user_delete_get);

// POST request to delete user.
router.post('/:id/delete', user_controller.user_delete_post);

// GET request to update user.
router.get('/:id/update', user_controller.user_update_get);

// POST request to update users
router.post('/:id/update', user_controller.user_update_post);

// GET request for one user.
router.get('/:id', user_controller.user_detail);


// GET request for list of all users.
router.get('/', user_controller.user);

module.exports = router;
