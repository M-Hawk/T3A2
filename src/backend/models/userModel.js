const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please add a username."],
    unique: true
  },
  email: {
    type: String,
    required: [true, "Please add an email address."],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please add a password."],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  booksOnLoan: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "BookDetails"
  }
},
{
  timestamps: true
})

module.exports = mongoose.model("User", userSchema)