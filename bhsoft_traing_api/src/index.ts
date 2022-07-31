import express, { Application } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { connect } from './config/db';
import router from './routers';
import cookieParser from 'cookie-parser';

const app: Application = express();
const port: number = 3300;
dotenv.config();

connect();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
router(app);

try {
     app.listen(port, (): void => {
          console.log(`Connected successfully on port ${port}`);
     });
} catch (error: any) {
     console.error(`Error occured: ${error.message}`);
}
