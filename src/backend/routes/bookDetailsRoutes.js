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

// Update and delete routes
router.route("/:id").get(getOneBookDetails).put(protect, admin, updateBookDetails).delete(protect, admin, deleteBookDetails)

// Get and create routes
router.route("/").get(getBookDetails).post(setBookDetails)


module.exports = router