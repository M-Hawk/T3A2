const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const LoanModel = require("../models/loanModel")

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
  const loans = await LoanModel.find({ })
  
  res.status(200).json(loans)
})

// @desc    Borrow a book
// @route   POST /api/loans
// @access  Private
// To-Do decide if we need this error and whether we should handle a similar error. 
// To do- Protected route (add isAdmin)
// To-do Add functionality to prevent someone adding the same book twice (not allowing duplicate title and author) 
const setloan = asyncHandler(async (req, res) => {
  // if(!req.body.title) {
  //   res.status(400)
  //   throw new Error("Please add the title key")
  // }
  const loan = await LoanModel.create({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    description: req.body.description
  })
  res.status(200).json(bookDetails)
})
