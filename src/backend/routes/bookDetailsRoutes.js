const express = require("express")
const router = express.Router()

// app.use(express.json()) // parses all api arguments as json

router.get("/", (req, res) => {
  res.status(200).json({ message: "Got all books details" }) // res.send if above used ^
})
router.post("/", (req, res) => {
  res.status(200).json({ message: "Set a books details" })
})
router.put("/:id", (req, res) => {
  res.status(201).json({ message: `Update book details ${req.params.id}` })
})
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete a books details ${req.params.id}` })
})

module.exports = router