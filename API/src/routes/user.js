import express from 'express';
import userController from '../controllers/userController';
import middlewareController from '../middleware/middlewareController';

const router = express.Router();

// Profile
router.get('/', middlewareController.verifyToken, userController.profileUser);

// Update profile
router.put('/:id', middlewareController.verifyTokenAndIsYour, userController.updateUser);

// /v1/user/:id (Get)
// /v1/user/:id (PUT) 
export default router;
