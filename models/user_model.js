import mongoose from "mongoose"

const ObjectId = mongoose.Schema.Types.ObjectId
const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  posts: [{ type: ObjectId, ref: "Post" }],
  followings: [{ type: ObjectId, ref: "User" }],
  followers: [{ type: ObjectId, ref: "User" }],
  friends: [{ type: ObjectId, ref: "User" }]
});

const UserModel = mongoose.model("User", userSchema)
export default UserModel


