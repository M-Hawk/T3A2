const express = require("express")
const router = express.Router()
const { 
  getOneBookCopy,
  getBookCopies, 
  setBookCopy, 
  updateBookCopy, 
  deleteBookCopy
 } = require("../controllers/bookCopyController")

 const { protect, admin } = require("../middleware/authMiddleware")

// Update and delete routes
router.route("/:id").get(getOneBookCopy).put(protect, admin, updateBookCopy).delete(protect, admin, deleteBookCopy)

// Get and create routes
router.route("/").get(getBookCopies).post(setBookCopy)


module.exports = router