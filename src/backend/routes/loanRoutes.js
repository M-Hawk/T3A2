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

 // PREFIX TO ROUTES: api/loans/

// Update post and delete routes

router.route("/:id").put(protect, admin, updateLoan).delete(protect, admin, deleteLoan)
router.route("/:id").post(setLoan)

// Get and route

router.route("/").get(protect, admin, getLoans)

router.route("/getmyloans").get(protect, getOwnLoans)


module.exports = router