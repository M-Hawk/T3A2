const mongoose = require("mongoose")
const bookDetailsSchema = mongoose.Schema({
  user: { // to remove. Added to practice adding a foreign key
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
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
  }
  }, {
  timestamp: true
})

module.exports = mongoose.model("bookDetails", bookDetailsSchema)