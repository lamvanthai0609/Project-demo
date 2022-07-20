import express from 'express';
import authController from '../app/controllers/authController';

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.post('/refreshtoken', authController.refeshToken);
router.post('/logout', authController.logout);

export default router;
