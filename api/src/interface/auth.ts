import { Types } from 'mongoose';

export interface ILogin {
     username: string;
     password: string;
}

export interface IObjToken {
     id: Types.ObjectId;
     username: string;
     role: string;
}
