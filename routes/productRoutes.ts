import express from 'express';
import { getProducts, addProduct, deleteProduct } from '../controllers/productController';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.get('/products', authMiddleware, getProducts);
router.post('/products', authMiddleware, addProduct);
router.delete('/products/:id', authMiddleware, deleteProduct);

export default router;
