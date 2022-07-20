import User from '../models/userModel';
import { Request, Response } from 'express';
class AuthController {
     async login(req: Request, res: Response) {}
     async signUp(req: Request, res: Response) {}
     async refeshToken(req: Request, res: Response) {}
     async logout(req: Request, res: Response) {}
}
export default new AuthController();
