import mongoose from "mongoose"


const ObjectId = mongoose.Schema.Types.ObjectId

const postSchema = new mongoose.Schema({
  user_id: { type: ObjectId, ref: "User", require: true },
  description: { type: String },
  media: [{ type: String }],
  reacts: [
    {
      user_id: { type: ObjectId, ref: "User" },
      react_type: { type: String, enum: ["like", "love", "care", "sad", "angry", "haha"] }
    }
  ],
  comments: [{ type: ObjectId, ref: "Comment" }]

})


const postModel = mongoose.model("Post", postSchema)
export default postModel
