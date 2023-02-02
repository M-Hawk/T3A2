const app = require("./app.js")
const port = process.env.PORT || 8000
// Listening on port

app.listen(port, () => console.log(`Server started on port ${port}`))