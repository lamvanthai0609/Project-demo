import express from 'express';
import productController from '../app/controllers/productController';
import productValidation from '../validation/productValidation';

const router = express.Router();

router.get('/', productValidation.getAllProduct, productController.getAllProduct);
router.post('/', productValidation.addProduct, productController.addProduct);

export default router;
