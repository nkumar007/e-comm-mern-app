import mongoose from "mongoose";
import AuthRoles from "../utils/authRoles";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    maxLength: [50, "Name must be less than 50 charecters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: [8, "password must be atleast of 8 charecters"],
    select: false,
  },
  role: {
    type: String,
    enum: Object.values(AuthRoles),
    default: AuthRoles.USER,
  },
});

module.exports = mongoose.model("User", userSchema);
