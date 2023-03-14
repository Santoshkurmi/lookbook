import postModel from "../models/post_model.js"
import commentModel from "../models/comment_model.js"

const createPost = (req, res) => {
  const { description, media } = req.body;
  const userId = req.user;

  const post = new postModel({
    user_id: userId,
    description: description,
    media: media
  })

  post.save()

}

const comment = (req, res) => {
  const { post_id, comment_id, content } = req.body;
  const user_id = req.user;
  if (comment_id == null) {
    const comment = commentModel.create({
      post_id, user_id, content
    })
    const id = comment._id;
    postModel.findAndUpdate({ _id: post_id }, { comments: [id] });


  }//
}
