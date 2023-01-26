const express = require("express")
const router = express.Router()
const { 
  getOneBookDetails,
  getBookDetails, 
  setBookDetails, 
  updateBookDetails, 
  deleteBookDetails,
 } = require("../controllers/bookDetailsController")

const {protect} = require("../middleware/authMiddleware")

// Update and delete routes
router.route("/:id").get(getOneBookDetails).put(protect, updateBookDetails).delete(protect, deleteBookDetails)

// Get and create routes
router.route("/").get(getBookDetails).post(protect, setBookDetails)


module.exports = router