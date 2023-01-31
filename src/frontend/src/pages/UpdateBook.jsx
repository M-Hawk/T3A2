import { useRef, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "../apiConnect/axios"

const AddBookCopy = () => {
  const { id } = useParams()
  console.log(id)
  
  const errRef = useRef()

  const [bookDetails, setBookDetails] = useState("") 
  
    
  const [errMsg, setErrMsg] = useState("") 
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setBookDetails(id)
  }, [bookDetails])


  const ADD_BOOK_COPY_URL = "/api/bookcopies/"
  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(ADD_BOOK_COPY_URL, JSON.stringify({ bookDetails: id }),
        {
          headers: {"Content-Type" : "application/json"}
        }
      )
      // Delete these console logs after
      console.log(response.data)
      console.log(JSON.stringify(response))
      setSuccess(true)
    } 
    catch (err) {
      if (!err?.response) {
        setErrMsg("No server response")
      } 
      else if (err.response?.status === 409) {
        setErrMsg("Error Occured")
      }
      else {
        setErrMsg("Add Book Copy Failed")
      }
    }
  }
  return (
    <>
      {success ? (
        <section>
          <h1>Book Copy Successfully Added!</h1>
        </section>   
      ):(
        <>
          <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          </section>
          <h2>Adding another copy of the book with the id {id}</h2>
          <button onClick={handleClick} className="btn btn-block">Increase Book Copies</button>
        </>
      )}
    </>
  )
}

const DeleteBookDetails = () => {
  const { id } = useParams()
  console.log(id)
  
  const errRef = useRef()

  const [bookDetails, setBookDetails] = useState("") 
  
    
  const [errMsg, setErrMsg] = useState("") 
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setBookDetails(id)
  }, [bookDetails])


  const ADD_BOOK_COPY_URL = "/api/bookcopies/"
  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(ADD_BOOK_COPY_URL, JSON.stringify({ bookDetails: id }),
        {
          headers: {"Content-Type" : "application/json"}
        }
      )
      // Delete these console logs after
      console.log(response.data)
      console.log(JSON.stringify(response))
      setSuccess(true)
    } 
    catch (err) {
      if (!err?.response) {
        setErrMsg("No server response")
      } 
      else if (err.response?.status === 409) {
        setErrMsg("Error Occured")
      }
      else {
        setErrMsg("Add Book Copy Failed")
      }
    }
  }
  return (
    <>
      {success ? (
        <section>
          <h1>Book Copy Successfully Added!</h1>
        </section>   
      ):(
        <>
          <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          </section>
          <h2>Adding another copy of the book with the id {id}</h2>
          <button onClick={handleClick} className="btn btn-block">Increase Book Copies</button>
        </>
      )}
    </>
  )
}


export default AddBookCopy 