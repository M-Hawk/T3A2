const asyncHandler = require("express-async-handler")

const BookDetailsModel = require("../models/bookDetailsModel")
// @desc    Get book details
// @route   GET /api/bookdetails
// @access  Private
const getBookDetails = asyncHandler(async (req, res) => {
  const bookDetails = await BookDetailsModel.find()
  res.status(200).json(bookDetails)
})

// @desc    Set book details
// @route   POST /api/bookdetails
// @access  Private
const setBookDetails = asyncHandler(async (req, res) => {
  if(!req.body.title) {
    res.status(400)
    throw new Error("Please add the title key")
  }
  const bookDetails = await BookDetailsModel.create({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    description: req.body.description
  })
  res.status(200).json(bookDetails)
})


// @desc    Update book details
// @route   PUT /api/bookdetails/:id
// @access  Private
const updateBookDetails = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Update book details ${req.params.id}` })
})

// @desc    Delete book details
// @route   DELETE /api/bookdetails/:id
// @access  Private
const deleteBookDetails = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete a books details ${req.params.id}` })
})

// exported controller functions
module.exports = {
  getBookDetails,
  setBookDetails,
  updateBookDetails,
  deleteBookDetails,
}