const asyncHandler = require("express-async-handler")
const LoanModel = require("../models/loanModel")
const BookCopyModel = require("../models/bookCopyModel")

// @desc    Get Own Profile's current loans
// @route   GET /api/loans/getmyloans
// @access  Private (40:30 seconds)
const getOwnLoans = asyncHandler(async (req, res) => {
  const loans = await LoanModel.find({ user: req.user.id }).populate({path: "bookCopy", populate: "bookDetails"})
  res.status(200).json(loans)
})

// SET SO ONLY ADMIN CAN USE THIS ROUTE

// @desc    Get All Current loans
// @route   GET /api/loans
// @access  Admin Private
const getLoans = asyncHandler(async (req, res) => {
  const loans = await LoanModel.find().populate({path: "bookCopy", populate: "bookDetails"}).populate("user")
  
  res.status(200).json(loans)
})

// To-Do decide if we need this error and whether we should handle a similar error. 
// To do- Protected route (add isAdmin)
// To-do Add functionality to prevent someone adding the same book twice (not allowing duplicate title and author) 

// @desc    Borrow a book
// @route   POST /api/loans
// @access  Private
const setLoan = asyncHandler(async (req, res) => {
  const bookCopy = await BookCopyModel.findById(req.body.bookCopy)
  if(bookCopy.isAvailable === true) {
    const loan = await LoanModel.create({ bookCopy: req.body.bookCopy, user: req.user.id })
    await BookCopyModel.findByIdAndUpdate(req.body.bookCopy, { isAvailable: false})
    res.status(200).json(loan)
  }
  else{
    res.status(200).json({ message: "Book is currently not available" })
  }
})

//To-Do: find a way to provide a more semantic error message for a loan doesn't exist with that id. 
//Could try Matt's method. 
// Protected route (To-Do add isAdmin)

// @desc    Update a loan
// @route   PUT /api/loans/:id
// @access  Admin Private
const updateLoan = asyncHandler(async (req, res) => {
  // if(!bookDetails) {
  //   res.status(400)
  //   throw new Error('No book could be found with that id.')
  // } 
  const updatedloan = await LoanModel.findByIdAndUpdate(req.params.id, req.body, {
    new:true,
  })
  res.status(201).json(updatedloan)

})

// @desc    Delete a loan
// @route   PUT /api/loans/:id
// @access  Admin Private
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
  getOwnLoans,
  getLoans,
  setLoan,
  updateLoan,
  deleteLoan,
}