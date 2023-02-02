const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const UserModel = require("../models/userModel")

const protect = asyncHandler(async(req, res, next) => {
  let token

  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    try {
      //Get token from header
      token = req.headers.authorization.split(" ")[1]

      //Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

      //Get user from the token
      req.user = await UserModel.findById(decoded.id).select("-password")

      next()
    }
    catch (error) {
      console.log(error)
      res.status(401)
      throw new Error("Not authorised") 
    }
  }
  if(!token) {
    res.status(401)
    throw new Error("Not authorised, no token")
  }
})




const admin = asyncHandler(async(req, res, next) => {
  const user = await UserModel.findById(req.user.id)
  if(user.isAdmin === true) {
    res.status(200),
    next()
  }
  else {
    res.status(401)
    throw new Error("You are not authorised to perform that action")
  }
})


module.exports = { protect, admin }