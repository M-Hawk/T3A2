import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Books from "./pages/Books"

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
            </Routes>
        </div>
      </Router>
    </>
  )
}

export default App