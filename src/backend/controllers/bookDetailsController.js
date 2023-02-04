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

// @desc    Get a single book's details by its ID passed in as a URI parameter
// @route   GET /api/bookdetails/:id
// @access  Public
const getOneBookDetails = asyncHandler(async (req, res) => { 
  try {
    const bookDetails = await BookDetailsModel.findById(req.params.id)
    const count  = await bookCopyModel.count({bookDetails: req.params.id, isAvailable: true})

    if (bookDetails) {

      res.status(200).json({...bookDetails.toJSON(), availableCopies:count})
    }
  }
  catch (err) {
    res.status(404).send({ error: "Book details not found with that ID" })
  }
  })

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
    throw new Error(`No book could be found with id: ${req.params.id}.`)
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
    throw new Error(`No book could be found with id ${req.params.id}.`)
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