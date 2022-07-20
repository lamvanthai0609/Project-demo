import { Router } from 'express-serve-static-core';
import authRouter from './auth';
export default function router(app: Router) {
     app.use('/api/auth/', authRouter);
}
