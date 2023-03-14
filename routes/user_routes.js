import express from "express"
import { register, login } from "../controllers/user_controller.js"

const userRouter = express.Router()

userRouter.post("/register", register)

export default userRouter;
