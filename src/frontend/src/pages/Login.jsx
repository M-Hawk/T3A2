import { useRef, useState, useEffect, useContext } from "react"
// import { AuthContext } from "../context/AuthProvider"
import axios from "../apiConnect/axios"
import { FaSignInAlt } from "react-icons/fa"

const LOGIN_URL = "api/users/login"

const Login = () => {

  // const { setAuth } = useContext(AuthContext)
  const usernameRef = useRef()
  const errRef = useRef()

  const [username, setUsername] = useState("")
  const [pwd, setPwd] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState(false)

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
      // console.log(JSON.stringify(response?.data))
      console.log(JSON.stringify(response))
      const token = (JSON.stringify(response.data.token))
      console.log(token)
      // const isAdmin = response?.data?.isAdmin
      // setAuth({username, password, token})
      setUsername("")
      setPwd("")
      setSuccess(true)
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
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Logged In</a>
          </p>
        </section>
      ):(
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
                <a href="/register">Register</a>
              </span>
            </p>
          </section>
        </>
      )}
    </>

  )
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // })

  // const { username, password } = formData
  
  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }))
  // }
  
  // const onSubmit = (e) => {
  //   e.preventDefault()
  // }

  // return <>
  //  <section className="heading">
  //   <h1>
  //     <FaSignInAlt /> Login
  //   </h1>
  //   <p>Login and start borrowing books!</p>
  // </section>
  // <section className="form">
  //   <form onSubmit={onSubmit}>
  //     <div className="form-group">
  //       <input 
  //       type="text" 
  //       className="form-control" 
  //       id="username"
  //       name="username" 
  //       value={username} 
  //       placeholder="Enter your username"
  //       onChange={onChange}
  //       />
  //     </div>
  //     <div className="form-group">
  //       <input 
  //       type="password" 
  //       className="form-control" 
  //       id="password"
  //       name="password" 
  //       value={password} 
  //       placeholder="Enter your password"
  //       onChange={onChange}
  //       />
  //     </div>
  //     <div className="form-group">
  //       <button type="submit" className="btn btn-block">
  //         Submit
  //       </button>
  //     </div>
  //   </form>
  // </section>
  // </>
}

export default Login