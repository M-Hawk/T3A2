const express = require("express")
const router = express.Router()
const {
  registerUser,
  registerAdmin,
  loginUser, 
  getProfile,
  getUsers,
  updateUserProfile,
  deleteProfile,
  deleteUser,
} = require("../controllers/userController")
const { protect, admin } = require("../middleware/authMiddleware")

// Post routes

router.post("/register", registerUser).post("/registeradmin",protect, admin, registerAdmin).post("/login", loginUser)

// Get routes

router.get("/profile", protect, getProfile).get("/", protect, admin, getUsers)

// Update route

router.put("/profile", protect, updateUserProfile)

// Delete routes

router.delete("/:id", protect, admin, deleteUser).delete("/profile", protect, deleteProfile)


module.exports = router