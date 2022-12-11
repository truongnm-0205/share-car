import express from 'express';
import carController from '../controllers/carController';
import middlewareController from '../middleware/middlewareController';

const router = express.Router();

// lấy danh sách tất cả các xe
router.get('/', middlewareController.verifyTokenAndAdminAuth, carController.getAllCarForAdmin);

export default router;
