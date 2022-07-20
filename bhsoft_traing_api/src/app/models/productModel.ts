import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const Schema = mongoose.Schema;

const Product = new Schema(
     {
          name: { type: String, required: true, trim: true },
          thumbnails: { type: String, trim: true },
          description: { type: String, trim: true },
          price: { type: Number, required: true },
          amount: { type: Number, required: true },
     },
     { timestamps: true },
);

Product.plugin(mongooseDelete, { deleteAt: true, overrideMethods: 'all' });

export default mongoose.model('Product', Product);
