import { useRef, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "../apiConnect/axios"

const AddBookCopy = () => {
  const { details } = useParams()
  // console.log(details)
  
  const errRef = useRef()

  const [bookDetails, setBookDetails] = useState("") 
  
    
  const [errMsg, setErrMsg] = useState("") 
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setBookDetails(details)
  }, [bookDetails])


  const ADD_BOOK_COPY_URL = "/api/bookcopies/"
  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(ADD_BOOK_COPY_URL, JSON.stringify({ bookDetails: details }),
        {
          headers: {"Content-Type" : "application/json"}
        }
      )
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
          <h2>Adding another copy of the book with the id {details}</h2>
          <button onClick={handleClick} className="btn btn-block">Increase Book Copies</button>
        </>
      )}
    </>
  )
}


export default AddBookCopy