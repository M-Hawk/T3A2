const mongoose = require("mongoose")
const loanSchema = mongoose.Schema({
  bookCopy: { 
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please add a book copy to indicate the book being borrowed."],
    ref: "BookCopy"
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please add a user to indicate who is borrowing the book."],
    ref: "User"
  },
  dueDate: {
    type: Date,
    default: Date.now() + 5*60*1000
  },
  // 14*24*60*60*1000,
  }, {
  timestamp: true
})

module.exports = mongoose.model("Loan", loanSchema)