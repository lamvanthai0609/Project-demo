import express from 'express';
import authController from '../app/controllers/authController';
//import authMiddleware from '../app/middleware/authMiddleware';
import authValidation from '../validation/authValidation';

const router = express.Router();

router.post('/signup', authValidation.sigup, authController.signUp);
router.post('/login', authValidation.login, authController.login);
router.post('/refreshtoken', authController.refeshToken);
router.post('/logout', authController.logout);

export default router;
