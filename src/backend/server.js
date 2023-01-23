const express = require("express")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middleware/errorMiddleware.js")
const port = process.env.PORT || 8000
const app = express()

// Middleware
app.use(express.json())

// Define route first
app.use("/api/bookdetails", require("./routes/bookDetailsRoutes"))

app.use(errorHandler)

// Listening on port

app.listen(port, () => console.log(`Server started on port ${port}`))