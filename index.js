import express from "express"
import userRouter from "./routes/user_routes.js"

const server = express()



server.use("/api/v1/user", userRouter)
server.use("/api/v1/post", postRouter)
server.use("/api/v1/chat", chatRouter)
server.use("/api/v1/notify", notifyRouter)
server.use("/api/v1/friend", friendRouter)

