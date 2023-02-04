const asyncHandler = require("express-async-handler")

const BookCopyModel = require("../models/bookCopyModel")

// @desc    Get all book copies
// @route   GET /api/bookcopies
// @access  Public
const getBookCopies = asyncHandler(async (req, res) => {
  const bookCopy = await BookCopyModel.find().populate("bookDetails")
  res.status(200).json(bookCopy)
})

// @desc    Get a single book copy by its ID
// @route   GET /api/bookcopies/:id
// @access  Public
const getOneBookCopy = asyncHandler(async (req, res) => {
  if (req.params.id.length !== 24){
    res.status(404)
    throw new Error(`${req.params.id} is not a valid book copy id.`)
  }
    const bookCopy = await BookCopyModel.findById(req.params.id).populate("bookDetails")
    if (!bookCopy) {
      res.status(404)
      throw new Error(`Book copy not found with the ID: ${req.params.id}`)
    }
    else {
      res.status(200).json(bookCopy)
      }
    })

// @desc    Create a new book copy
// @route   POST /api/bookcopies/
// @access  Admin Private
const setBookCopy = asyncHandler(async (req, res) => {
  const bookCopy = await BookCopyModel.create({
    bookDetails: req.body.bookDetails,
    isAvailable: req.body.isAvailable,
  })
  res.status(200).json(bookCopy)
})

// @desc    Update an existing book copy based on an ID passed in as a URI parameter
// @route   PUT /api/bookcopies/:id
// @access  Admin Private
const updateBookCopy = asyncHandler(async (req, res) => {
  if (req.params.id.length !== 24){
    res.status(404)
    throw new Error(`${req.params.id} is not a valid id.`)
  }

  const bookCopy = await BookCopyModel.findById(req.params.id)
  if (!bookCopy) {
    res.status(404)
    throw new Error(`No book copy could be found with id: ${req.params.id}.`)
  }

  const updatedBookCopy = await BookCopyModel.findByIdAndUpdate(req.params.id, req.body, {
    new:true,
  }) 
  res.status(201).json(updatedBookCopy)
})

// @desc    Delete an existing book copy based on an ID passed in as a URI parameter
// @route   DELETE /api/bookcopies/:id
// @access  Admin Private
const deleteBookCopy = asyncHandler(async (req, res) => {
  if (req.params.id.length !== 24){
    res.status(404)
    throw new Error(`${req.params.id} is not a valid id.`)
  }

  const bookCopy = await BookCopyModel.findById(req.params.id)
  if (!bookCopy) {
    res.status(404)
    throw new Error(`No book copy could be found with id: ${req.params.id}.`)
  }

  await bookCopy.remove()
  
  res.status(200).json({ message: `Deleted a book's details with this ID: ${req.params.id}` })
})

// exported controller functions
module.exports = {
  getOneBookCopy,
  getBookCopies,
  setBookCopy,
  updateBookCopy,
  deleteBookCopy
}