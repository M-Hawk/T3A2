const express = require("express")
const router = express.Router()
const {
  registerUser,
  registerAdmin,
  loginUser, 
  getProfile,
  getOneUser,
  getUsers,
  updateUserProfile,
  deleteProfile,
  deleteUser,
  getAuthMe
} = require("../controllers/userController")
const { protect, admin } = require("../middleware/authMiddleware")

// PREFIX TO ROUTES: api/users/

// Post routes
router.post("/register", registerUser)
router.post("/registeradmin",protect, admin, registerAdmin)
router.post("/login", loginUser)

// Get routes
//Used to authenticate users based on their id
router.get("/auth", protect, getAuthMe)

//Returns a user's profile based on the id of their JWT token
router.get("/profile", protect, getProfile)

//Get all users
router.get("/", protect, getUsers)

//Get one user based on their id
router.get("/:id", protect, admin, getOneUser)

// Update route

router.put("/profile", protect, updateUserProfile)

// Delete routes

router.delete("/:id", protect, admin, deleteUser)

router.delete("/profile", protect, deleteProfile)

module.exports = router