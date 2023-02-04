const asyncHandler = require("express-async-handler")
const bookCopyModel = require("../models/bookCopyModel")

const BookDetailsModel = require("../models/bookDetailsModel")

// @desc    Get all book details
// @route   GET /api/bookdetails
// @access  Public
const getBookDetails = asyncHandler(async (req, res) => {
  const bookDetails = await BookDetailsModel.find()
  res.status(200).json(bookDetails)
})

// To-Do- Find out why the else statement below doesn't work but the catch does.

// @desc    Get a single book's details by its ID
// @route   GET /api/bookdetails/:id
// @access  Public
const getOneBookDetails = asyncHandler(async (req, res) => { 
  try {
    const bookDetails = await BookDetailsModel.findById(req.params.id)
    const count  = await bookCopyModel.count({bookDetails: req.params.id, isAvailable: true})

    if (bookDetails) {

      res.status(200).json({...bookDetails.toJSON(), availableCopies:count})
    }
    // else {
    //   res.status(404).send({ error: 'Book copy not found with that ID'})
    // }
  }
  catch (err) {
    res.status(404).send({ error: "Book details not found with that ID" })
  }
  })

// To-do Add functionality to prevent someone adding the same book twice (not allowing duplicate title and author) 


// @desc    Set new book details
// @route   POST /api/bookdetails
// @access  Admin Private
const setBookDetails = asyncHandler(async (req, res) => {
  const bookDetails = await BookDetailsModel.create({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    description: req.body.description,
    imageList: req.body.imageList,
    imageDetailed: req.body.imageDetailed
  })
  res.status(200).json(bookDetails)
})

//To-Do: find a way to provide a more semantic error message for then a book doesn't exist with that id. 
// Protected route (To-Do add isAdmin)

// @desc    Update an exsisting book's details
// @route   PUT /api/bookdetails/:id
// @access  Admin Private
const updateBookDetails = asyncHandler(async (req, res) => {
  if (req.params.id.length !== 24){
    res.status(400)
    throw new Error(`${req.params.id} is not a valid id.`)
  }

  const bookDetails = await BookDetailsModel.findById(req.params.id)
  
  if (!bookDetails) {
    res.status(400)
    throw new Error('No book could be found with that id.')
  }
  const updatedBookDetails = await BookDetailsModel.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
      }) 
  res.status(201).json(updatedBookDetails)

})

// @desc    Delete an existing book's details
// @route   DELETE /api/bookdetails/:id
// @access  Admin Private
const deleteBookDetails = asyncHandler(async (req, res) => {
  if (req.params.id.length !== 24){
    res.status(400)
    throw new Error(`${req.params.id} is not a valid id.`)
  }

  const bookDetails = await BookDetailsModel.findById(req.params.id)
  if (!bookDetails) {
    res.status(400)
    throw new Error('No book could be found with that id.')
  }
  
  await bookDetails.remove()
  
  res.status(200).json({ message: `Deleted the book details for the book with the id ${req.params.id}` })
})

// exported controller functions

module.exports = {
  getOneBookDetails,
  getBookDetails,
  setBookDetails,
  updateBookDetails,
  deleteBookDetails,
}