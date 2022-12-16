const express= require( 'express');
const tripController= require( '../controllers/tripController');
const middlewareController= require( '../middleware/middlewareController');

const router = express.Router();

// lấy danh sách tất cả các xe
router.post('/register-trip', middlewareController.verifyToken, tripController.createNewTrip);
router.get('/', middlewareController.verifyToken, tripController.getAllTrip);

module.exports = router;
