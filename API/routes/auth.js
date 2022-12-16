const express = require('express');
const authController = require( '../controllers/authController');
const middlewareController = require( '../middleware/middlewareController');

const router = express.Router();

// register
router.post('/register', authController.registerUser);

// Login
router.post('/login', authController.login);

// refreshToken
router.post('/refresh', authController.refreshToken);

// Logout
router.post('/logout', middlewareController.verifyToken, authController.logout);

module.exports = router;
