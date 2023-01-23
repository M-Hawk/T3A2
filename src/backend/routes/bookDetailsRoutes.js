const express = require("express")
const router = express.Router()
const { 
  getBookDetails, 
  setBookDetails, 
  updateBookDetails, 
  deleteBookDetails,
 } = require("../controllers/bookDetailsController")

 // Get and post routes
router.route("/").get(getBookDetails).post(setBookDetails)

// Create and delete routes
router.route("/:id").put(updateBookDetails).delete(deleteBookDetails)

module.exports = router