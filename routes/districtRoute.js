const districtController = require('../controllers/districtController')
const router = require('express').Router();
const auth = require('../middleware/auth')

router.post('/add', auth, districtController.addDistrict);
router.post('/get', auth, districtController.getDistrict);
router.post('/getAll', districtController.getAllDistrict);

module.exports = router