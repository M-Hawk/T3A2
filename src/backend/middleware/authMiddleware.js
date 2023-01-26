const jwt = require("jsonwebtoken")
const asyncHnadler = require("express-async-handler")
const User = require("../models/userModel")

const protect = asyncHnadler(async(req, res, next) => {
  let token

  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    try {
      //Get token from header
      token = req.headers.authorization.split(" ")[1]

      //Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

      //Get user from the token
      req.user = await User.findById(decoded.id).select("-password")

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

module.exports = { protect }