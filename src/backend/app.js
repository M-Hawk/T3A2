//Seperate file to allow automated testing to occur without running the server and listens on the port. Test framework can sent requests without going through the network.  
const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middleware/errorMiddleware.js")
const {connectDB} =  require("./config/db")
const cors = require("cors")

// const scheduledFunctions = require("./scheduledFunctions")

connectDB()

const app = express()

app.use(cors())

app.use(express.urlencoded({extended: true}))

app.use(express.json())

// Scheduled jobs

// Checks 
// scheduledFunctions.initScheduledJobs()
// Middleware
//API homepage Route
app.get('/', (req, res) => res.send({ info: "Wormreads API"}))

// Define route first
app.use("/api/bookdetails", require("./routes/bookDetailsRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/bookcopies", require("./routes/bookCopyRoutes"))
app.use("/api/loans", require("./routes/loanRoutes"))

app.use(errorHandler)

module.exports = app
