const asyncHandler = require("express-async-handler")
const LoanModel = require("../models/loanModel")

//Todo- FIX THSI ROUTE!!!!!!

// @desc    Get Own Profile's current loans
// @route   GET /api/loans
// @access  Private (40:30 seconds)
const getOwnLoans = asyncHandler(async (req, res) => {
  const loans = await LoanModel.find({ user: req.user.id })
  
  res.status(200).json(loans)
})

// @desc    Get All Current loans
// @route   GET /api/loans
// @access  Admin Private
const getLoans = asyncHandler(async (req, res) => {
  const loans = await LoanModel.find().populate(["user","bookCopy"])
  
  res.status(200).json(loans)
})

// To-Do decide if we need this error and whether we should handle a similar error. 
// To do- Protected route (add isAdmin)
// To-do Add functionality to prevent someone adding the same book twice (not allowing duplicate title and author) 

// @desc    Borrow a book
// @route   POST /api/loans
// @access  Private
const setLoan = asyncHandler(async (req, res) => {
  // if(!req.body.title) {
  //   res.status(400)
  //   throw new Error("Please add the title key")
  // }
  const loan = await LoanModel.create({
    bookCopy: req.body.bookCopy,
    user: req.body.user,
    dueDate: req.body.dueDate
  })
  res.status(200).json(loan)
})

// Protected route (To-Do add isAdmin)

// @desc    Update a loan
// @route   PUT /api/loans/:id
// @access  Admin Private
const updateLoan = asyncHandler(async (req, res) => {
  const loan = await LoanModel.findById(req.params.id)
  
//To-Do: find a way to provide a more semantic error message for then a book doesn't exist with that id. 
//Could try Matt's method. 
  // if(!bookDetails) {
  //   res.status(400)
  //   throw new Error('No book could be found with that id.')
  // } 
  const updatedloan = await LoanModel.findByIdAndUpdate(req.params.id, req.body, {
    new:true,
  }) // Test to see if we want new:true. Create it if it doesn't exist. 
  res.status(201).json(updatedloan)

})

const deleteLoan = asyncHandler(async (req, res) => {
  const loan = await LoanModel.findById(req.params.id)
  //Could try Matt's method. 
  // if(!bookDetails) {
  //   res.status(400)
  //   throw new Error('No book could be found with that id.')
  // }

  await loan.remove()
  
  res.status(200).json({ message: `Deleted loan details for the loan record with this ID: ${req.params.id}` })
})

module.exports = {
  getLoans,
  setLoan,
  updateLoan,
  deleteLoan,
}