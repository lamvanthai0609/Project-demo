import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';
import { ROLES } from '../../constants';

const Schema = mongoose.Schema;

const User = new Schema(
     {
          username: { type: String, unique: true, required: true, min: 6 },
          password: { type: String, unique: true, required: true, min: 6 },
          name: { type: String, required: true },
          email: { type: String, unique: true, required: true },
          numberphone: { type: String, unique: true },
          image: { type: String },
          address: { type: Array },
          role: { type: String, default: ROLES.VIEWER },
     },
     { timestamps: true },
);
User.plugin(mongooseDelete, { deleteAt: true, overrideMethods: 'all' });

export default mongoose.model('User', User);
