import { useRef, useState, useEffect, useContext } from "react"
// import { AuthContext } from "../context/AuthProvider"
import axios from "../apiConnect/axios"
import { FaSignInAlt } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"

const LOGIN_URL = "api/users/login"

const Login = ({ setUser }) => {

  // const { setAuth } = useContext(AuthContext)
  const usernameRef = useRef()
  const errRef = useRef()
  const navigateTo = useNavigate()

  const [username, setUsername] = useState("")
  const [pwd, setPwd] = useState("")
  const [errMsg, setErrMsg] = useState("")

  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg("")
  }, [username, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({username, password: pwd}),
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      // set token in local storage
      localStorage.setItem("token", response.data.token)
      // log user in
      await setUser(response.data)
      // console.log(response.data.token)
      // redirect to home page
      navigateTo("/")
    }
    catch (err) {
      if (!err?.response) {
        setErrMsg("No server response")
      } 
      else if (err.response?.status === 400) {
        setErrMsg("Invalid Credentials")
      }
      else if (err.response?.status === 401) {
        setErrMsg("Unauthorized")
      }
      else {
        setErrMsg("Login Failed")
      }
      // For screen readers
      errRef.current.focus()
    }

  }

  return (
    <>
      <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      </section>

      <section className="heading">
        <h2>
          <FaSignInAlt /> Login
        </h2>
        <p>Login and start borrowing books!</p>
      </section>

      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input 
              type="text"
              id="username"
              ref={usernameRef}
              // autoComplete="off"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              />
              <button className="btn btn-block">Log In</button>
          </div>
        </form>
        <p>
          Need an Account?<br />
          <span>
            {/* {put router link here} */}
            <Link className="btn btn-small" to="/register"><FaSignInAlt/> Register</Link>
          </span>
        </p>
      </section>
    </>

  )
}

export default Login