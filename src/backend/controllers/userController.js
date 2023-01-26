const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body

  if(!username || !email || !password) {
    res.status(400)
    throw new Error("Please add all fields")
  }

  //Check if user email exists
  const userEmailExists= await User.findOne({email})

  if(userEmailExists) {
    res.status(400)
    throw new Error("Email already exists.")
  }
  //Check if username exists
  const usernameExists= await User.findOne({username})

  if(usernameExists) {
    res.status(400)
    throw new Error("Username already exists.")
  }
  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Create User
  const user = await User.create({
    username,
    email,
    password: hashedPassword
  })
  
  if(user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id)
    })
  } 
  else {
    res.status(400)
    throw new Error("Invalid user data")
  }
})

// @desc    Authenticate a User
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const {username, password} = req.body

  // Check for username
  const user = await User.findOne({ username })

  if(user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    })
  }
  else {
    res.status(400)
      throw new Error("Invalid credentials")

  }
})

// @desc    Get user data
// @route   GET /api/users/profile
// @access  Private
const getProfile = asyncHandler(async(req, res) => {
  const { _id, email, username } = await User.findById(req.user.id)
  res.status(200).json({
    id: _id,
    username,
    email,
  })
})

// Generate JWT Tokin
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
    })
}
module.exports = { 
  registerUser,
  loginUser,
  getProfile,
}


