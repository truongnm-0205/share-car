const express = require('express');
const allCodeController= require('../controllers/allcodeController');

const router = express.Router();

// lấy danh sách tất cả các xe
router.post('/', allCodeController.getAllCode);

module.exports = router;
