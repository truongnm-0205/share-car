import express from 'express';
import allCodeController from '../controllers/allcodeController';

const router = express.Router();

// lấy danh sách tất cả các xe
router.get('/', allCodeController.getAllCode);

export default router;
