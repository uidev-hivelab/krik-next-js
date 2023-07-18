import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: ObjectId,
    required: true,
    ref: "Category",
  },
  details: [
    {
      name: String,
      value: String,
    },
  ],
  subProducts: [
    {
      images: [],
      description_images: [],
      color: {
        color: {
          type: String,
        },
        image: {
          type: String,
        },
      },
      sizes: [
        {
          size: String,
          qty: Number,
        },
      ],
    },
  ],
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
