const asyncHandler = require("express-async-handler")

const BookCopyModel = require("../models/bookCopyModel")

// @desc    Get all book copies
// @route   GET /api/bookcopies
// @access  Public
const getBookCopies = asyncHandler(async (req, res) => {
  const bookCopy = await BookCopyModel.find().populate("bookDetails")
  res.status(200).json(bookCopy)
})

// To-Do- Find out why the else statement below doesn't work but the catch does.

// @desc    Get a single book copy by its ID
// @route   GET /api/bookcopies/:id
// @access  Public
const getOneBookCopy = asyncHandler(async (req, res) => {
  try {
    const bookCopy = await BookCopyModel.findById(req.params.id).populate("bookDetails")
    if (bookCopy) {
      res.status(200).json(bookCopy)
    }
    // else {
    //   res.status(404).send({ error: 'Book copy not found with that ID'})
    // }
  }
  catch (err) {
    res.status(404).send({ error: "Book copy not found with that ID" })
  }
  })

// To do- Protected route (add isAdmin) 

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

// Protected route (To-Do add isAdmin)
//To-Do: find a way to provide a more semantic error message for when a book doesn't exist with that id. 

// @desc    Update an exsisting book copy
// @route   PUT /api/bookcopies/:id
// @access  Admin Private
const updateBookCopy = asyncHandler(async (req, res) => {
//Could try Matt's method. 

  // if(!bookDetails) {
  //   res.status(400)
  //   throw new Error('No book could be found with that id.')
  // } 
  const updatedBookCopy = await BookCopyModel.findByIdAndUpdate(req.params.id, req.body, {
    new:true,
  }) 
  res.status(201).json(updatedBookCopy)

})

// Protected route (To-Do add isAdmin)

// @desc    Delete book copy
// @route   DELETE /api/bookcopies/:id
// @access  Admin Private
const deleteBookCopy = asyncHandler(async (req, res) => {
  const bookCopy = await BookCopyModel.findById(req.params.id)
  //Could try Matt's method. 
  // if(!bookDetails) {
  //   res.status(400)
  //   throw new Error('No book could be found with that id.')
  // }
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