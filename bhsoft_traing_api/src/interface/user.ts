import { Schema } from 'mongoose';

export interface Iuser {
     username: string;
     password: string;
     name: string;
     email: string;
     numberphone?: string;
     image?: string;
     address?: Array<string>;
     role: string;
     cart?: Array<ICart>;
     comparePassword?: Function;
}

export interface ICart {
     product?: Schema.Types.ObjectId;
     quanlity?: number;
}
