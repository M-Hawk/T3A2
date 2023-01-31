import { useRef, useState, useEffect } from "react"
import { FaUser, FaInfoCircle, FaCheck, FaTimes} from "react-icons/fa"
import axios from "../apiConnect/axios"

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const REGISTER_URL = "/api/users/register"

const Register = () => {
  const emailRef = useRef()
  const errRef = useRef()
  
  const [email, setEmail] = useState("") 
  const [validEmail, setValidEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)
  
  const [username, setUsername] = useState("") 
  const [validUsername, setValidUsername] = useState(false)
  const [usernameFocus, setUsernameFocus] = useState(false) 


  const [pwd, setPwd] = useState("") 
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState("") 
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState("") 
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email)
    console.log(result)
    console.log(email)
    setValidEmail(result)
  }, [email])

  useEffect(() => {
    const result = USERNAME_REGEX.test(username)
    console.log(result)
    console.log(username)
    setValidUsername(result)
  }, [username])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd)
    console.log(result)
    // console.log(pwd)
    setValidPwd(result)
    const match = pwd === matchPwd
    setValidMatch(match)
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg("")
  }, [email, username, pwd, matchPwd])

  // const [formData, setFormData] = useState({
  //   email: "",
  //   username: "",
  //   password: "",
  //   password2: "",
  // })

  // const { email, username, password, password2 } = formData
  
  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }))
  // }
  
  // const onSubmit = (e) => {
  //   e.preventDefault()
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // if submit button enabled with a JS hack
    const v1 = USERNAME_REGEX.test(username)
    const v2 = PWD_REGEX.test(pwd)
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry")
      return
    }
    try {
      const response = await axios.post(REGISTER_URL, JSON.stringify({ email, username, password: pwd }),
        {
          headers: {"Content-Type" : "application/json"}
        }
      )
      // Delete these console logs after
      console.log(response.data)
      console.log(response.data.token)
      console.log(JSON.stringify(response))
      setSuccess(true)
    } 
    catch (err) {
      if (!err?.response) {
        setErrMsg("No server response")
      } 
      else if (err.response?.status === 409) {
        setErrMsg("Username or Email Taken")
      }
      else {
        setErrMsg("Registration Failed")
      }
      errRef.current.focus()
    }
  }

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>   
      ):(
        <> 
          <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          </section>
          <section className="heading">
            <h2>
              <FaUser /> Register
            </h2>
              <p>Please create an account</p>
          </section>

          <section className="form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">
                  Email:
                  <span className={validEmail ? "valid": "hide"}>
                    <FaCheck />
                  </span> 
                  <span className={validEmail || !email ? "hide" : "invalid"}>
                    <FaTimes />
                  </span> 
                </label>
                <input 
                  type="text"
                  id="email"
                  ref= {emailRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="emailnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
                <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                  <FaInfoCircle />
                  Please enter a valid email address.<br />
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="username">
                  Username:
                  <span className={validUsername ? "valid": "hide"}>
                    <FaCheck />
                  </span> 
                  <span className={validUsername || !username ? "hide" : "invalid"}>
                    <FaTimes />
                  </span> 
                </label>
                <input 
                  type="text"
                  id="username"
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Enter your username"
                  aria-invalid={validUsername ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUsernameFocus(true)}
                  onBlur={() => setUsernameFocus(false)}
                />
                <p id="uidnote" className={usernameFocus && username && !validUsername ? "instructions" : "offscreen"}>
                  <FaInfoCircle />
                  4 to 24 characters.<br />
                  Must begin with a letter.<br />
                  Letters, numbers, underscores and hyphens allowed.
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  Password:
                  <span className={validPwd ? "valid": "hide"}>
                    <FaCheck />
                  </span> 
                  <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <FaTimes />
                  </span> 
                </label>
                <input 
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  placeholder="Enter your password"
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                  <FaInfoCircle />
                  8 to 24 characters.<br />
                  Must include uppercase and lowercase letters, a number and a special character.<br />
                  Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="confirm_pwd">
                  Confirm Password:
                  <span className={validMatch && matchPwd ? "valid": "hide"}>
                    <FaCheck />
                  </span> 
                  <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                    <FaTimes />
                  </span> 
                </label>
                <input 
                  type="password"
                  id="confirm_password"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  required
                  placeholder="Confirm your password"
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                  <FaInfoCircle />
                  Must match the first password input field.    
                </p>
              </div>
              {/* Fix formatting so that the button is disabled */}
              <button disabled={!validUsername || !validPwd || !validMatch ? true : false} className="btn btn-block">Register</button>
            </form>
          
            <p>
            Already registered?<br />
              <span className="line">
                {/* Put Router Link Here */}
                <a href="#">Log In</a>
              </span>
            </p>
          </section>
        </> 
      )}
    </>
  )
}

export default Register

      {/* <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
            type="email" 
            className="form-control" 
            id="email"
            name="email" 
            value={email} 
            placeholder="Enter your email"
            onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input 
            type="text" 
            className="form-control" 
            id="username"
            name="username" 
            value={username} 
            placeholder="Enter your username"
            onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input 
            type="password" 
            className="form-control" 
            id="password"
            name="password" 
            value={password} 
            placeholder="Enter your password"
            onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input 
            type="password" 
            className="form-control" 
            id="password2"
            name="password2" 
            value={password2} 
            placeholder="Confirm your password"
            onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section> */}