const express = require("express")
const router = express.Router()
const { 
  getLoans, 
  setLoan, 
  updateLoan, 
  deleteLoan
 } = require("../controllers/loanController")

const {protect} = require("../middleware/authMiddleware")

// Update and delete routes
router.route("/:id").put(protect, updateLoan).delete(protect, deleteLoan)

// Get and create routes
router.route("/").get(protect, getLoans).post(protect, setLoan)


module.exports = router