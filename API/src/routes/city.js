const express = require('express');

const cityController = require('../controllers/cityController');

const router = express.Router();

// lấy danh sách tất cả các xe
router.get('/city', cityController.getAllCity);
router.get('/district', cityController.getAllDistrict);

module.exports = router;
