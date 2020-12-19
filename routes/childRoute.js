const childController = require('../controllers/childController')
const router = require('express').Router();
const auth = require('../middleware/auth')

router.post('/add', auth, childController.addChild);
router.post('/get', auth, childController.getChild);
module.exports = router