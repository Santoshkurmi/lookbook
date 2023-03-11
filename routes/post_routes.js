import express from "express"


const postRouter = express.Router();

postRouter.post("/create", createPost)
postRouter.post("/delete", deletePost)
postRouter.post("/update", updatePost)
postRouter.post("/like", likePost)

export default postRouter
