const mongoose = require("mongoose")
const loanSchema = mongoose.Schema({
  bookCopy: { 
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "BookCopy"
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  dueDate: {
    type: Date,
    required: [true, "Please add a date"] //make a default date that is today's date plus 2 weeks
  },
  
  }, {
  timestamp: true
})

module.exports = mongoose.model("Loan", loanSchema)