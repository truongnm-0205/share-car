import express from 'express';
import driverController from '../controllers/driverController';
import middlewareController from '../middleware/middlewareController';

const router = express.Router();

// List
router.get('/index', middlewareController.verifyToken, driverController.listDriver);

// Create
router.post('/create', middlewareController.verifyToken, driverController.createDriver);

// Destroy
router.post('/destroy', middlewareController.verifyToken, driverController.destroyDriver);


export default router;
