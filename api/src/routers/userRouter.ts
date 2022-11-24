import express from 'express';
import userController from '../app/controllers/userController';

const router = express.Router();

router.post('/findUser', userController.findUser);
router.post('/addCart', userController.addCart);

export default router;
