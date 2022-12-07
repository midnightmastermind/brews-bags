const router = require('express').Router();
const group_controller = require('../controllers/group.controller');


// GET request for creating group. NOTE This must come before route for id (i.e. display group).
router.get('/create', group_controller.group_create_get);

// POST request for creating group.
router.post('/create', group_controller.group_create_post);
// POST request to update all groups.
router.post('/update', group_controller.group_update);

// GET request to delete group.
router.get('/:id/delete', group_controller.group_delete_get);

// POST request to delete group.
router.post('/:id/delete', group_controller.group_delete_post);

// GET request to update group.
router.get('/:id/update', group_controller.group_update_get);

// POST request to update groups
router.post('/:id/update', group_controller.group_update_post);

// GET request for one group.
router.get('/:id', group_controller.group_detail);


// GET request for list of all groups.
router.get('/', group_controller.group);

module.exports = router;
