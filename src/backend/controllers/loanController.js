const asyncHandler = require("express-async-handler")
const LoanModel = require("../models/loanModel")
const BookCopyModel = require("../models/bookCopyModel")
const UserModel = require("../models/userModel")

// @desc    Get Own Profile's current loans (based on JWT token)
// @route   GET /api/loans/getmyloans
// @access  Private
const getOwnLoans = asyncHandler(async (req, res) => {
  const loans = await LoanModel.find({ user: req.user.id }).populate({path: "bookCopy", populate: "bookDetails"})
  res.status(200).json(loans)
})


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
// @route   POST /api/loans/:id
// @access  Private
const setLoan = asyncHandler(async (req, res) => {
  const bookCopy = await BookCopyModel.findOne({bookDetails: req.params.id, isAvailable: true})
  // .populate("bookDetails")
  console.log(bookCopy)

  if(!bookCopy) {
    res.status(200).json({ message: "No Books are currently available"})
  }
  else {
    const loan = await LoanModel.create({ bookCopy: bookCopy._id, user: req.user.id })
    const user = await UserModel.findById(req.user._id)
    user.booksOnLoan.push(bookCopy.bookDetails._id)
    user.save()
    await BookCopyModel.findByIdAndUpdate(bookCopy._id, { isAvailable: false})
    res.status(200).json(loan)
  }
})

// @desc    Update a loan
// @route   PUT /api/loans/:id
// @access  Admin Private
const updateLoan = asyncHandler(async (req, res) => {
  if (req.params.id.length !== 24){
    res.status(404)
    throw new Error(`${req.params.id} is not a valid id.`)
  }
  
  const loan = await LoanModel.findById(req.params.id)
  if (!loan) {
    res.status(404)
    throw new Error(`No loan record could be found with id: ${req.params.id}.`
  )}
 
  const updatedloan = await LoanModel.findByIdAndUpdate(req.params.id, req.body, {
    new:true,
  })
  
  res.status(201).json(updatedloan)
})

// @desc    Delete a loan
// @route   PUT /api/loans/:id
// @access  Admin Private
const deleteLoan = asyncHandler(async (req, res) => {
  if (req.params.id.length !== 24){
    res.status(404)
    throw new Error(`${req.params.id} is not a valid id.`)
  }

  const loan = await LoanModel.findById(req.params.id)
  if (!loan) {
    res.status(404)
    throw new Error(`No loan record could be found with id: ${req.params.id}.`)
  }

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