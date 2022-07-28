import mongoose, { Model } from 'mongoose';
import mongooseDelete from 'mongoose-delete';
import { ROLES } from '../../constants';
import bcrypt from 'bcrypt';
import { ICart, Iuser } from '../../interface';
const Schema = mongoose.Schema;

const Cart = new Schema<ICart, Model<ICart>>({
     product: { type: Schema.Types.ObjectId, ref: 'Product' },
     quanlity: { type: Number, default: 1 },
});

const User = new Schema<Iuser, Model<Iuser>>(
     {
          username: { type: String, unique: true, required: true },
          password: { type: String, unique: true, required: true },
          name: { type: String, required: true },
          email: { type: String, unique: true, required: true },
          numberphone: { type: String, unique: true },
          image: { type: String },
          address: { type: [String] },
          cart: [{ type: Cart }],
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
