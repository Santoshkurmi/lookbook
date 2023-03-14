import userModel from "../models/user_model.js"

const register = async (req, res) => {

  const { name, email, password } = req.body;
  const data = await userModel.findOne({ email })

  if (data) return res.send({ success: false, message: "Email already exists" })

  const user = new userModel({
    name, email, password
  })

  const userOfDatabase = await user.save()

  res.send({ success: true, message: "User is registered successfully", data: userOfDatabase })


}//register 

const login = (req, res) => {


}//login

const getProfile = (req, res) => {


}//getProfile


const changePassword = (req, res) => {

}//changePassowrd

export { register, login, getProfile, changePassword }
