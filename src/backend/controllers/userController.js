const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const UserModel = require("../models/userModel")

// ADD ERROR HANDLING TO ALL ROUTES!!!

// @desc    Register new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body

  if(!username || !email || !password) {
    res.status(400)
    throw new Error("Please add all fields")
  }

  //Check if user email exists
  const userEmailExists= await UserModel.findOne({email})

  if(userEmailExists) {
    res.status(409)
    throw new Error("Email already exists.")
  }
  //Check if username exists
  const usernameExists= await UserModel.findOne({username})

  if(usernameExists) {
    res.status(409)
    throw new Error("Username already exists.")
  }
  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Create User
  const user = await UserModel.create({
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

// @desc    Register new admin user
// @route   POST /api/users/registeradmin
// @access  Admin private
const registerAdmin = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body

  if(!username || !email || !password) {
    res.status(400)
    throw new Error("Please add all fields")
  }

  //Check if user email exists
  const userEmailExists= await UserModel.findOne({email})

  if(userEmailExists) {
    res.status(409)
    throw new Error("Email already exists.")
  }
  //Check if username exists
  const usernameExists= await UserModel.findOne({username})

  if(usernameExists) {
    res.status(409)
    throw new Error("Username already exists.")
  }
  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Create User
  const user = await UserModel.create({
    username,
    email,
    password: hashedPassword,
    isAdmin: true
  })
  
  if(user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } 
  else {
    res.status(400)
    throw new Error("Invalid user data")
  }
})

// @desc    User Login
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const {username, password} = req.body

  // Check for username
  const user = await UserModel.findOne({ username })

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

// @desc    Get own user data
// @route   GET /api/users/profile
// @access  Private
const getProfile = asyncHandler(async(req, res) => {
  // const { _id, email, username,  } = await UserModel.findById(req.user.id)
  const {_id, email, username, booksOnLoan} = await UserModel.findById(req.user.id).populate("booksOnLoan")
  // res.send(await UserModel.findById(req.user.id)).populate("booksOnLoan")
  
  res.status(200).json({
    id: _id,
    username,
    email,
    booksOnLoan,
  })
})

// @desc    Get all users in the database
// @route   GET /api/users/
// @access  Admin Private
const getUsers = asyncHandler(async(req, res) => {
  const users = await UserModel.find().populate("booksOnLoan")
  
  res.status(200).json(users)
})
// @desc    Get a single user's profile by their ID
// @route   GET /api/bookdetails/:id
// @access  Public
const getOneUser = asyncHandler(async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id).populate("booksOnLoan")
    if (user) {
      console.log(user)
      res.status(200).json(user)
    }
    // else {
    //   res.status(404).send({ error: 'Book copy not found with that ID'})
    // }
  }
  catch (err) {
    res.status(404).send({ error: "User not found with that ID" })
  }
  })


// @desc    Update own user profile
// @route   PUT /api/users/profile/
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  // if(!bookDetails) {
  //   res.status(400)
  //   throw new Error('No book could be found with that id.')
  // } 
  const updatedUserProfile = await UserModel.findByIdAndUpdate(req.user.id, req.body, {
    new:true,
  })
  res.status(201).json(updatedUserProfile)

})

// @desc    Delete own profile
// @route   DELETE /api/users/profile
// @access  Private
const deleteProfile = asyncHandler(async(req, res) => {
  const deleteprofile = await UserModel.findById(req.user.id)
  await deleteprofile.remove()
  
  res.status(200).json({ message: `Your profile has been deleted from the database`})
})

// @desc    Delete a user's data
// @route   DELETE /api/users/:id
// @access  Admin Private
const deleteUser = asyncHandler(async(req, res) => {
  const user = await UserModel.findById(req.params.id)
  const { username } = await UserModel.findById(req.params.id)
  await user.remove()
  
  res.status(200).json({ message: `Deleted user: ${username}, from the database`})
})



// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "2hr",
    })
}

module.exports = { 
  registerUser,
  registerAdmin,
  loginUser,
  getProfile,
  getOneUser,
  getUsers,
  updateUserProfile,
  deleteProfile,
  deleteUser,
}


