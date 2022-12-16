const express = require( 'express');
const userController = require( '../controllers/userController');
const middlewareController = require( '../middleware/middlewareController');

const router = express.Router();

// Profile
router.get('/:id', middlewareController.verifyToken, userController.profileUser);

// Update profile
router.put('/update_profile', middlewareController.verifyToken, userController.updateUser);


module.exports = router;
