const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middleware/errorMiddleware.js")
const connectDB =  require("./config/db")
const port = process.env.PORT || 8000
// const scheduledFunctions = require("./scheduledFunctions")

connectDB()

const app = express()

app.use(express.json())

// Scheduled jobs

// Checks 
// scheduledFunctions.initScheduledJobs()
// Middleware

// Define route first
app.use("/api/bookdetails", require("./routes/bookDetailsRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/bookcopies", require("./routes/bookCopyRoutes"))
app.use("/api/loans", require("./routes/loanRoutes"))

app.use(errorHandler)

// Listening on port

app.listen(port, () => console.log(`Server started on port ${port}`))