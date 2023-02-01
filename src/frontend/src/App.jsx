import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Books from "./pages/Books"
import BookInfo from "./pages/BookInfo"
import AddBookDetails from "./pages/AddBookDetails"
import AddBookCopy from "./pages/AddBookCopy"

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
            <NavBar />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/books" element={<Books />} />
              <Route path="/books/:id" element={<BookInfo />} />
              <Route path="/books/add/details" element={<AddBookDetails />} />
              <Route path="/books/add/copy/:details" element={<AddBookCopy />} />
            </Routes>
            <Footer />
        </div>
      </Router>
    </>
  )
}

export default App