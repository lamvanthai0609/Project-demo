import express from 'express';
import authController from '../app/controllers/authController';
import authMiddleware from '../app/middleware/authMiddleware';

const router = express.Router();

router.post('/signup', authMiddleware.sigup, authController.signUp);
router.post('/login', authMiddleware.login, authController.login);
router.post('/refreshtoken', authController.refeshToken);
router.post('/logout', authController.logout);

export default router;
