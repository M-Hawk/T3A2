// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
  res.json({ message: "Register User" })
}

// @desc    Authenticate a User
// @route   POST /api/users/login
// @access  Public
const loginUser = (req, res) => {
  res.json({ message: "Login User" })
}

// @desc    Get user data
// @route   GET /api/users/profile
// @access  Public
const getProfile = (req, res) => {
  res.json({ message: "Display profile" })
}

module.exports = { 
  registerUser,
  loginUser,
  getProfile,
}


