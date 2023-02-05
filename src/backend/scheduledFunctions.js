const cronJob = require("node-cron")
const LoanModel = require("./models/loanModel")

// Currenty work in progress cron job that checks books on loan, if loan.dueDate = date.now, remove loan item from loans array

exports.initScheduledJobs = async () => {
  // Executes every day at 11:59 pm
//   const loans = await LoanModel.find().populate({path: "bookCopy", populate: "bookDetails"}).populate("user")
//   const scheduledJobFunction = cronJob.schedule("59 23 * * *", () => {
//     console.log("I'm executed on a schedule!")
//     if(loans.length) {
//       console.log(loans.length)
//       while (i < loans.length) {
//         console.log(i)
//         if(i.dueDate = date.now()) {
//           LoanModel.remove(i)
//         }
//       }
//     }
//   })
//   scheduledJobFunction.start()
}