import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  user: String,
  email: String,
  senha: String,
  senha_hash: String,
});

export default model("User", UserSchema);
