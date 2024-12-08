import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      reqired: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password:{
        type: String,
        required: true,
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
