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
} = require("../controllers/userController")
const { protect, admin } = require("../middleware/authMiddleware")

// Post routes

router.post("/register", registerUser).post("/registeradmin",protect, admin, registerAdmin).post("/login", loginUser)

// Get routes

// router.get("/profile", protect, getProfile).get("/", protect, admin, getUsers)
router.get("/profile", protect, getProfile).get("/", getUsers).get("/:id", getOneUser)

// Update route

router.put("/profile", protect, updateUserProfile)

// Delete routes

router.delete("/:id", protect, admin, deleteUser).delete("/profile", protect, deleteProfile)


module.exports = router