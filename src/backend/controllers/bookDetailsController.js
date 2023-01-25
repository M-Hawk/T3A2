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
// ? decide if we need this error and whether we should handle a similar error. 
const setBookDetails = asyncHandler(async (req, res) => {
  // if(!req.body.title) {
  //   res.status(400)
  //   throw new Error("Please add the title key")
  // }
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
  const bookDetails = await BookDetailsModel.findById(req.params.id)
//To-Do: find a way to provide a more semantic error message for then a book doesn't exist with that id. 
//Could try Matt's method. 
  // if(!bookDetails) {
  //   res.status(400)
  //   throw new Error('No book could be found with that id.')
  // }
  const updatedBookDetails = await BookDetailsModel.findByIdAndUpdate(req.params.id, req.body, {
    new:true,
  }) // Test to see if we want new:true. Create it if it doesn't exist. 
  res.status(201).json(updatedBookDetails)

})

// @desc    Delete book details
// @route   DELETE /api/bookdetails/:id
// @access  Private
const deleteBookDetails = asyncHandler(async (req, res) => {
  const bookDetails = await BookDetailsModel.findById(req.params.id)
  
  await bookDetails.remove()
  
  res.status(200).json({ message: `Deleted a book's details ${req.params.id}` })
})

// exported controller functions
module.exports = {
  getBookDetails,
  setBookDetails,
  updateBookDetails,
  deleteBookDetails,
}