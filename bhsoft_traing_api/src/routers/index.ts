import { Router } from 'express-serve-static-core';
import authRouter from './authRouter';
export default function router(app: Router) {
     app.use('/api/auth/', authRouter);
}
