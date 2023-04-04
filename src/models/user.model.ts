import { Schema, Types, model, Model } from "mongoose";
import { UserInterface } from "../interfaces/user.interface";

const UserSchema = new Schema<UserInterface>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    phoneNumber: { type: Number, required: false },
    avatar: { type: String, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model("users", UserSchema);
export default UserModel;
