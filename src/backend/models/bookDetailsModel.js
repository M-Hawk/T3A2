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
  },
  
}, {
  timestamp: true,
//   toJSON: {
//     virtuals: true
//   },
//   toObject: {
//     virtuals: true
// }
})

// bookDetailsSchema.virtual("availability").get(async function() {
//   model = mongoose.model("BookCopy")
//   count = await model.count({bookDetails: this._id.toString(), isAvailable: true})
//   console.log(count)
//   return count;
//   // .count({}, function (err, count) {
//   //   console.log("The count is " + count)
//   // })
// })

module.exports = mongoose.model("BookDetails", bookDetailsSchema)