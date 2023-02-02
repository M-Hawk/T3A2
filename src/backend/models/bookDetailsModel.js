const mongoose = require("mongoose")
const bookDetailsSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a book title value"]
  },
  author: {
    type: String,
    required: [true, "Please add a book author value"]
  },
  genre: {
    type: String,
    required: [true, "Please add a book genre value"]
  },
  description: {
    type: String,
    required: [true, "Please add a book description value"]
  },
  imageList: {
    type: String,
    required: false
  },
  imageDetailed: {
    type: String,
    required: false
  }
  }, {
  timestamp: true
})

module.exports = mongoose.model("BookDetails", bookDetailsSchema)