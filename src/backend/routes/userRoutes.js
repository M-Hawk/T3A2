const express = require("express")
const router = express.Router()
const {
  registerUser, 
  loginUser, 
  getProfile,
  getUsers,
  updateUserProfile,
  deleteProfile,
  deleteUser,
} = require("../controllers/userController")
const {protect} = require("../middleware/authMiddleware")

// Post routes

router.post("/register", registerUser).post("/login", loginUser)

// Get routes

router.get("/profile", protect, getProfile).get("/", protect, getUsers)

// Update route

router.put("/profile", protect, updateUserProfile)
// Delete route

router.delete("/:id", protect, deleteUser).delete("/profile", protect, deleteProfile)




module.exports = router