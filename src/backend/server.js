const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middleware/errorMiddleware.js")
const connectDB =  require("./config/db")
const port = process.env.PORT || 8000

connectDB()

const app = express()

// Middleware
app.use(express.json())

// Define route first
app.use("/api/bookdetails", require("./routes/bookDetailsRoutes"))
app.use("/api/users", require("./routes/userRoutes"))

app.use(errorHandler)

// Listening on port

app.listen(port, () => console.log(`Server started on port ${port}`))