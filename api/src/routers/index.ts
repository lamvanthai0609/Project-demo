import { Router } from 'express-serve-static-core';
import AuthMiddleware from '../app/middleware/authMiddleware';
import authRouter from './authRouter';
import productRouter from './productRouter';
import userRouter from './userRouter';

export default function router(app: Router) {
     app.use('/api/auth/', authRouter);
     app.use('/api/product/', productRouter);
     app.use('/api/user/', AuthMiddleware.authentication, userRouter);
}
