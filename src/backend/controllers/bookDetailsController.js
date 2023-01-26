const asyncHandler = require("express-async-handler")

const BookDetailsModel = require("../models/bookDetailsModel")
// @desc    Get all book details
// @route   GET /api/bookdetails
// @access  Public
const getBookDetails = asyncHandler(async (req, res) => {
  const bookDetails = await BookDetailsModel.find()
  res.status(200).json(bookDetails)
})

// @desc    Get a single book's details by its ID
// @route   GET /api/bookdetails/:id
// @access  Public
// To-Do- Find out why the else statement below doesn't work but the catch does.  
const getOneBookDetails = asyncHandler(async (req, res) => {
  try {
    const bookDetails = await BookDetailsModel.findById(req.params.id)
    if (bookDetails) {
      res.status(200).json(bookDetails)
    }
    // else {
    //   res.status(404).send({ error: 'Book copy not found with that ID'})
    // }
  }
  catch (err) {
    res.status(404).send({ error: 'Book details not found with that ID' })
  }     
  })
// @desc    Set new book details
// @route   POST /api/bookdetails
// @access  Admin Private
// To do- Protected route (add isAdmin)
// To-do Add functionality to prevent someone adding the same book twice (not allowing duplicate title and author) 
const setBookDetails = asyncHandler(async (req, res) => {
  const bookDetails = await BookDetailsModel.create({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    description: req.body.description
  })
  res.status(200).json(bookDetails)
})

// @desc    Update an exsisting book's details
// @route   PUT /api/bookdetails/:id
// @access  Admin Private
// Protected route (To-Do add isAdmin)
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
  }) 
  res.status(201).json(updatedBookDetails)

})

// @desc    Delete an existing book's details
// @route   DELETE /api/bookdetails/:id
// @access  Admin Private
// Protected route (To-Do add isAdmin)
const deleteBookDetails = asyncHandler(async (req, res) => {
  const bookDetails = await BookDetailsModel.findById(req.params.id)
  //Could try Matt's method. 
  // if(!bookDetails) {
  //   res.status(400)
  //   throw new Error('No book could be found with that id.')
  // }
  await bookDetails.remove()
  
  res.status(200).json({ message: `Deleted a book's details ${req.params.id}` })
})

// exported controller functions
module.exports = {
  getOneBookDetails,
  getBookDetails,
  setBookDetails,
  updateBookDetails,
  deleteBookDetails,
}