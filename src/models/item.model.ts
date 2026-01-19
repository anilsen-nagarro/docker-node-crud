import mongoose, { Schema, Document } from 'mongoose';

export interface ItemDocument extends Document {
  name: string;
  price: number;
  description?: string;
}

const ItemSchema = new Schema<ItemDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ItemDocument>('Item', ItemSchema);
