const express = require("express")
const router = express.Router()
const { 
  getBookDetails, 
  setBookDetails, 
  updateBookDetails, 
  deleteBookDetails,
 } = require("../controllers/bookDetailsController")
 
// Update and delete routes
router.route("/:id").put(updateBookDetails).delete(deleteBookDetails)

// Get and create routes
router.route("/").get(getBookDetails).post(setBookDetails)


module.exports = router