const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please add an email address."],
    unique: true
  },
  username: {
    type: String,
    required: [true, "Please add a username."],
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
},
{
  timestamps: true
})

module.exports = mongoose.model("User", userSchema)