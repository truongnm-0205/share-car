import express from 'express';
import userController from '../controllers/userController';
import middlewareController from '../middleware/middlewareController';

const router = express.Router();

// Profile
router.get('/profile', middlewareController.verifyToken, userController.profileUser);

// Update profile
router.post('/update_profile', middlewareController.verifyToken, userController.updateUser);

export default router;
