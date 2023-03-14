import mongoose from "mongoose"

const ObjectId = mongoose.Schema.Types.ObjectId;


const commentSchema = new mongoose.Schema({
  user_id: { type: ObjectId, ref: "User", require: true },
  post_id: { type: ObjectId, ref: "Post", require: true },
  comment_id: { type: ObjectId, ref: "Comment" },
  content: { type: String, require: true },
  likes: [{ type: ObjectId, ref: "User" }],
  replies: [{ type: ObjectId, ref: "Comment" }]
})


const commentModel = mongoose.model("Comment", commentSchema)

export default commentModel
