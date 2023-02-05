import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import Register from "./pages/Register"
import Books from "./pages/Books"
import BookInfo from "./pages/BookInfo"
import AddBookDetails from "./pages/AddBookDetails"
import AddBookCopy from "./pages/AddBookCopy"
import UserProfile from "./pages/UserProfile"
import axios from "./apiConnect/axios"


const App = () => {

  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  // Checks whether a user is logged in when a page is reloaded via the local storage
  useEffect(() => {
    const checkStorageToken = async () => {
      const token = localStorage.getItem('token')
      if (token){
        // console.log(token)
        const response = await axios.get("/api/users/auth", {
          headers: { "Authorization": `Bearer ${token}` },
        })
        setUser(response.data)
      }
    }
    checkStorageToken()
  }, [])

  // YET TO IMPLEMENT Scaffold code for loggin users out when JWT token expires

  // const AuthVerify = (user) => {
  //   let location = useLocation()  
  // // Checks whether the Jwt token is expired and logs the user out
  //   useEffect(() => {
  //     const token = JSON.parse(localStorage.getItem("token"))

  //     if (token) {
  //       const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

  //       if (decoded.exp * 1000 < Date.now()) {
  //         // Sort this logout function function
  //         user.logOut()
  //       }
  //     }
  //   }, [location, user])
  // }

  return (
    <>
      <Router>
        <NavBar user={user}/>
        <Header />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/logout" element={<Logout user={user} setUser={setUser}/>} />
          <Route path="/register" element={<Register setUser={setUser}/>} />
          <Route path="/userprofile/:id" element={<UserProfile token={token} user={user}/>} />
          <Route path="/books" element={<Books user={user}/>} />
          <Route path="/books/:id" element={<BookInfo user={user}/>} />
          <Route path="/books/add/" element={<AddBookDetails />} />
          <Route path="/books/add/copy/:details" element={<AddBookCopy />} />
          <Route path="*" element={<h4>Page not found!</h4>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
