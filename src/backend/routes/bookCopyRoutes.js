const express = require("express")
const router = express.Router()
const { 
  getOneBookCopy,
  getBookCopies, 
  setBookCopy, 
  updateBookCopy, 
  deleteBookCopy
 } = require("../controllers/bookCopyController")

const {protect} = require("../middleware/authMiddleware")

// Update and delete routes
router.route("/:id").get(getOneBookCopy).put(protect, updateBookCopy).delete(protect, deleteBookCopy)

// Get and create routes
router.route("/").get(getBookCopies).post(protect, setBookCopy)


module.exports = router