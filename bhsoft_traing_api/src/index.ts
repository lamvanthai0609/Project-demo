import express, { Application } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { connect } from "./config/db";
import router from "./routers";
const app: Application = express();
const port: number = 3300;
dotenv.config();

connect();
app.use(express.json());
app.use(cors());
router(app);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
