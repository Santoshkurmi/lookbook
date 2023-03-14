import express from "express"
import userRouter from "./routes/user_routes.js"
import dotenv from "dotenv"
import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/facebook").then(() =>
  console.log("COnnedted"))
dotenv.config(".env")

const server = express()

server.use(express.json())

server.use("/api/v1/user", userRouter)

var PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is started on port ${PORT}`))


