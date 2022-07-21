import mongoose, { Model } from 'mongoose';
import mongooseDelete from 'mongoose-delete';
import { ROLES } from '../../constants';
import bcrypt from 'bcrypt';
import { Iuser } from '../../interface';
const Schema = mongoose.Schema;

const User = new Schema<Iuser, Model<Iuser>>(
     {
          username: { type: String, unique: true, required: true },
          password: { type: String, unique: true, required: true },
          name: { type: String, required: true },
          email: { type: String, unique: true, required: true },
          numberphone: { type: String, unique: true },
          image: { type: String },
          address: { type: [String] },
          role: { type: String, default: ROLES.VIEWER },
     },
     { timestamps: true },
);
User.plugin(mongooseDelete, { deleteAt: true, overrideMethods: 'all' });

User.post('validate', function (doc, next) {
     if (this.isModified('password')) {
          doc.password = bcrypt.hashSync(doc.password, 10);
     }
     return next();
});

User.methods.comparePassword = async function (password: string) {
     const user = this;
     return await bcrypt.compare(password, user.password);
};

export default mongoose.model('User', User);
