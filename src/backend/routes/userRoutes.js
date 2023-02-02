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

// getAuthMe must be above :id get request to avoid being confused with id
router.get("/auth", protect, getAuthMe)

router.get("/profile", protect, getProfile)
router.get("/", protect, admin, getUsers)
router.get("/:id", protect, admin, getOneUser)

// Update route

router.put("/profile", protect, updateUserProfile)

// Delete routes

router.delete("/:id", protect, admin, deleteUser).delete("/profile", protect, deleteProfile)

module.exports = router