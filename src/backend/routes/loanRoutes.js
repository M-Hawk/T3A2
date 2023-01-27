const express = require("express")
const router = express.Router()
const {
  getOwnLoans, 
  getLoans, 
  setLoan, 
  updateLoan, 
  deleteLoan
 } = require("../controllers/loanController")

 const { protect, admin } = require("../middleware/authMiddleware")

// Update and delete routes

router.route("/:id").put(protect, admin, updateLoan).delete(protect, admin, deleteLoan)

// Get and create routes

router.route("/").get(protect, admin, getLoans).post(protect, setLoan)
router.route("/getmyloans").get(protect, admin, getOwnLoans)


module.exports = router