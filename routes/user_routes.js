import express from "express"


const userRouter = express.Router()

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.post("/update", updateUser)
userRouter.get("/profile", getProfile)

export default userRouter;
