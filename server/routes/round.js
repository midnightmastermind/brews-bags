const router = require('express').Router();
const round_controller = require('../controllers/round.controller');


// GET request for creating round. NOTE This must come before route for id (i.e. display round).
router.get('/create', round_controller.round_create_get);

// POST request for creating round.
router.post('/create', round_controller.round_create_post);
// POST request to update all rounds.
router.post('/update', round_controller.round_update);

// GET request to delete round.
router.get('/:id/delete', round_controller.round_delete_get);

// POST request to delete round.
router.post('/:id/delete', round_controller.round_delete_post);

// GET request to update round.
router.get('/:id/update', round_controller.round_update_get);

// POST request to update rounds
router.post('/:id/update', round_controller.round_update_post);

// GET request for one round.
router.get('/:id', round_controller.round_detail);


// GET request for list of all rounds.
router.get('/', round_controller.round);

module.exports = router;
