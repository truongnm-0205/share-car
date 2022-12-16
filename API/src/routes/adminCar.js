const express= require( 'express');
const carController= require( '../controllers/carController');
const middlewareController= require( '../middleware/middlewareController');

const router = express.Router();

// lấy danh sách tất cả các xe
router.post('/', middlewareController.verifyTokenAndAdminAuth, carController.getAllCarForAdmin);

router.put('/:carId', middlewareController.verifyTokenAndAdminAuth, carController.UpdateStatusRequest);

module.exports = router;
