import { Router } from 'express-serve-static-core';
import authRouter from './authRouter';
import productRouter from './productRouter';
export default function router(app: Router) {
     app.use('/api/auth/', authRouter);
     app.use('/api/product/', productRouter);
}
