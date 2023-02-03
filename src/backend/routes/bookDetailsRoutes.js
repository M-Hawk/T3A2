const express = require("express")
const router = express.Router()
const { 
  getOneBookDetails,
  getBookDetails, 
  setBookDetails, 
  updateBookDetails, 
  deleteBookDetails,
 } = require("../controllers/bookDetailsController")

 const { protect, admin } = require("../middleware/authMiddleware")

 // PREFIX TO ROUTES: api/bookdetails/

// Get routes

router.route("/:id").get(getOneBookDetails)
router.route("/").get(getBookDetails)

// Update route
router.route("/:id").put(protect, admin, updateBookDetails)

// Delete route
router.route("/:id").delete(protect, admin, deleteBookDetails)

// Create route
router.route("/").post(protect, admin, setBookDetails)


module.exports = router