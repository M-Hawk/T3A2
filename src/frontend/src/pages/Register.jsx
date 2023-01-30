import { useRef, useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/


const Register = () => {
  const userRef = useRef()
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
    userRef.current.focus()
  }, [])

  
  useEffect(() => {
    const result = EMAIL_REGEX.test(email)
    console.log(result)
    console.log(email)
    setValidUsername(result)
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
    console.log(pwd)
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

  return <>
    <section>
      <p ref={errRef} classname={errMsg ? "errmsg" :
      "offscreen"} aria-live="assertive">{errMsg}</p>
    </section>
    <section className="heading">
      <h1>
        <FaUser /> Register
      </h1>
      <p>Please create an account</p>
    </section>

    <section className="form">
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
    </section>
  </>
}

export default Register