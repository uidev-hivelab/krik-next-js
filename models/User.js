import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: "Vui lòng điền Tên",
    },
    email: {
      type: String,
      require: "Vui lòng điền Email",
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: "Vui lòng điền Mật khẩu",
    },
    role: {
      type: String,
      default: "user",
    },
    image: {
      type: String,
      default:
        "https://www.clipartmax.com/png/middle/424-4242023_fa-user-circle-icon.png",
    },
    emailVerifiled: {
      type: Boolean,
      default: false,
    },
    defaultPaymentMethod: {
      type: String,
      default: "COD",
    },
    deliveryAddress: [
      {
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
        address: {
          type: String,
        },
        province: {
          type: String,
        },
        district: {
          type: String,
        },
        ward: {
          type: String,
        },
        note: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
