const express = require("express")
const router = express.Router()
const { 
  getBookDetails, 
  setBookDetails, 
  updateBookDetails, 
  deleteBookDetails,
 } = require("../controllers/bookDetailsController")

router.route("/").get(getBookDetails).post(setBookDetails)

router.route("/:id").put(updateBookDetails).delete(deleteBookDetails)

module.exports = router