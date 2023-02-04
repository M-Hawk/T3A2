const asyncHandler = require("express-async-handler")
const LoanModel = require("../models/loanModel")
const BookCopyModel = require("../models/bookCopyModel")
const UserModel = require("../models/userModel")

// @desc    Get Own Profile's current loans
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
  // console.log(req.body._id)
  if(!bookCopy) {
    res.status(200).json( {message: "No Books are currently available"} )
  }
  else {
    const loan = await LoanModel.create({ bookCopy: bookCopy._id, user: req.body._id })
    const user = await UserModel.findById(req.body._id)
    user.booksOnLoan.push(bookCopy.bookDetails._id)
    user.save()
    await BookCopyModel.findByIdAndUpdate(bookCopy._id, { isAvailable: false })
    console.log(user)
    res.status(200).json(user)
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