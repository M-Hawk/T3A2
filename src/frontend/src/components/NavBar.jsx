import {FaSignInAlt, FaHome, FaUser, FaBook} from "react-icons/fa"
import {Link} from "react-router-dom"


const NavBar = () => {
  
  return (
    <nav class="navbar navbar-expand-lg bg-success bg-gradient">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">Wormreads</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <Link class="nav-link active" aria-current="page" to="/"><FaHome /> Home</Link>
        <Link class="nav-link" to="/login"><FaSignInAlt /> Login</Link>
        <Link class="nav-link" to="/register"><FaUser /> Register</Link>
        <Link class="nav-link" to="/books"><FaBook /> Books</Link>
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