import {FaSignInAlt, FaHome, FaUser, FaIdBadge, FaBook} from "react-icons/fa"
import logo from '../images/logo6.png'
import {Link} from "react-router-dom"


const NavBar = ({ user }) => {
  
  return (
    <nav className="navbar navbar-expand-lg bg-success bg-gradient">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/"><img className="logo" src={logo} alt="Image of Books" /> </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" aria-current="page" to="/"><FaHome /> Home</Link>
            {user ? (<Link className="nav-link" to="/userprofile/:id"><FaIdBadge /> User Profile</Link>) : (
            <>
            <Link className="nav-link" to="/login"><FaSignInAlt /> Login</Link>
            <Link className="nav-link" to="/register"><FaUser /> Register</Link>
            </>
            )}
            <Link className="nav-link" to="/books"><FaBook /> Books</Link>
          </div>
        </div>
      </div>
</nav>

  )
}

export default NavBar

{/* <header className="header">
<div className="logo">
  <Link to="/">Wormreads</Link>
</div>
<ul>
  <li>
    <Link to="/login">
      <FaSignInAlt /> Login
    </Link>
  </li>
  <li>
    <Link to="/register">
      <FaUser /> Register
    </Link>
  </li>
</ul>
</header> */}