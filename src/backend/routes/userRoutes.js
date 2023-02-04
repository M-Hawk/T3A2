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

router.post("/register", registerUser).post("/registeradmin",protect, admin, registerAdmin).post("/login", loginUser)

// Get routes
//Used to authenticate users based on their id
router.get("/auth", protect, getAuthMe)

//Returns a user's provide based on the id of their JWT token
router.get("/profile", protect, getProfile)
router.get("/", protect, getUsers)
router.get("/:id", protect, admin, getOneUser)

// Update route

router.put("/profile", protect, updateUserProfile)

// Delete routes

router.delete("/:id", protect, admin, deleteUser)

router.delete("/profile", protect, deleteProfile)

module.exports = router