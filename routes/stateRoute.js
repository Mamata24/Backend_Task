const stateController = require('../controllers/stateController')
const router = require('express').Router();
const auth = require('../middleware/auth')

router.post('/add', auth, stateController.addState);
router.post('/get', auth, stateController.getState);
router.post('/getAll', stateController.getAllState);

module.exports = router