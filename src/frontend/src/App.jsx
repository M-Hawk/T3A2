import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
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
import UserProfile from "./pages/UserProfile"
import axios from "axios"


const App = () => {

  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [isAdmin, setAdmin] = useState(false)
  
  useEffect(async () => {
    const token = localStorage.getItem('token')
    if (token){
      const user = await axios.get("http://localhost:5000/api/auth/me", {
        headers: { "Authorization": `Bearer ${token}` }
      })
      console.log(user)
    }
  }, [])

  return (
    <>
      <Router>
            <NavBar />
            <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login setUser ={setUser}/>} />
              <Route path="/register" element={<Register setUser ={setUser}/>} />
              <Route path="/userprofile/:id" element={<UserProfile />} />
              <Route path="/books" element={<Books />} />
              <Route path="/books/:id" element={<BookInfo />} />
              <Route path="/books/add/details" element={<AddBookDetails />} />
              <Route path="/books/add/copy/:details" element={<AddBookCopy />} />
            </Routes>
            </div>
            <Footer />
      </Router>
    </>
  )
}

export default App

{/* <Route path="/books/add/details" element={<AddBookDetails />} />
<Route path="/books/add/copy/:details" element={<AddBookCopy />} />

directory id action  */}