import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Books from "./pages/Books"
import BookInfo from "./pages/BookInfo"
import AddBookDetails from "./pages/AddBookDetails"

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/books" element={<Books />} />
              <Route path="/books/:id" element={<BookInfo />} />
              <Route path="/books/add/details" element={<AddBookDetails />} />
            </Routes>
        </div>
      </Router>
    </>
  )
}

export default App