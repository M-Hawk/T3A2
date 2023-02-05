import { useRef, useState, useEffect } from "react"
import { FaBook, FaInfoCircle, FaCheck, FaTimes} from "react-icons/fa"
import axios from "../apiConnect/axios"
import { Link, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const TITLE_REGEX = /^[A-Za-z0-9\s\-_,\.;é:@&()]{3,250}$/
const AUTHOR_REGEX = /^[A-Za-z0-9\s\-_,\.;:@&()]{3,250}$/
const GENRE_REGEX = /^[A-Za-z0-9\s\-_,\.;:@&()]{3,250}$/


const UpdateBookDetails = ({ book }) => {
  const titleRef = useRef()
  const errRef = useRef()
  const navigateTo = useNavigate()

  const [title, setTitle] = useState(`${book.title}`) //Perhaps needs a string `
  const [validTitle, setValidTitle] = useState(false)
  const [titleFocus, setTitleFocus] = useState(false)

  const [author, setAuthor] = useState(`${book.author}`) 
  const [validAuthor, setValidAuthor] = useState(false)
  
  const [authorFocus, setAuthorFocus] = useState(false)

  const [genre, setGenre] = useState(`${book.genre}`) 
  const [validGenre, setValidGenre] = useState(false)
  const [genreFocus, setGenreFocus] = useState(false)

  const [description, setDescription] = useState(`${book.description}`) 
  const [descriptionFocus, setDescriptionFocus] = useState(false)


  const [errMsg, setErrMsg] = useState("") 

  useEffect(() => {
    titleRef.current.focus()
  }, [])

  useEffect(() => {
    const result = TITLE_REGEX.test(title)
    setValidTitle(result)
  }, [title])

  useEffect(() => {
    const result = AUTHOR_REGEX.test(author)
    setValidAuthor(result)
  }, [author])

  useEffect(() => {
    const result = GENRE_REGEX.test(genre)
    setValidGenre(result)
  }, [genre])


  const handleSubmit = async (e) => {
    e.preventDefault()
      try {
        const token = localStorage.getItem("token")
        const response = await axios.put("api/bookdetails/" + book._id, JSON.stringify({ title }),
          {
            headers: { "Authorization": `Bearer ${token}`,
                        "Content-Type" : "application/json"}
          },
          )
        navigateTo("/books")
        } 
      catch (err) {
        if (err.response) {
          console.log(err.response)
        }
        else if (!err?.response) {
          setErrMsg("No server response")
        } 
        else if (err.response?.status === 409) {
          setErrMsg("Error Occured")
        }
        else {
          setErrMsg("Update Book Details Failed")
        }
        errRef.current.focus()
      }
    }

 
  return (
    <>
      <hr className="hr hr-blurry" />
      <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      </section>
      <section className="heading">
        <h2>
          <FaBook /> Update Book Details for {book.title}
        </h2>
        <p>Please update the fields below to reflect the changes you would like to make to the book</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          {/* Title Section */}
          <div className="form-group">
            <label htmlFor="title">
              Title:
              <span className={validTitle ? "valid": "hide"}>
                <FaCheck />
              </span> 
              <span className={validTitle || !title ? "hide" : "invalid"}>
                <FaTimes />
              </span> 
            </label>
            <input 
              type="text"
              ref= {titleRef}
              id="title"              
              onChange={(e) => setTitle(e.target.value)}
              required
              aria-invalid={validTitle ? "false" : "true"}
              aria-describedby="titlenote"
              onFocus={() => setTitleFocus(true)}
              onBlur={() => setTitleFocus(false)}
              value={title}
            />
            <p id="titlenote" className={titleFocus && title && !validTitle ? "instructions" : "offscreen"}>
              <FaInfoCircle />
              Please enter a valid title. <br />
              3 to 250 characters.<br />
              Letters, numbers, spaces, punctuation and the following symbols are allowed: @ &.
            </p>
          </div>
          {/* Author Section */}
          <div className="form-group">
            <label htmlFor="author">
              Author:
              <span className={validAuthor ? "valid": "hide"}>
                <FaCheck />
              </span> 
              <span className={validAuthor || !author ? "hide" : "invalid"}>
                <FaTimes />
              </span> 
            </label>
            <input 
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              aria-invalid={validAuthor ? "false" : "true"}
              aria-describedby="authornote"
              onFocus={() => setAuthorFocus(true)}
              onBlur={() => setAuthorFocus(false)}
            />
            <p id="authornote" className={authorFocus && author && !validAuthor ? "instructions" : "offscreen"}>
              <FaInfoCircle />
              Please enter a valid author. <br />
              3 to 250 characters.<br />
              Letters, numbers, spaces, punctuation and the following symbols are allowed: @ &.
            </p>
              </div>
          {/* Genre Section */}
          <div className="form-group">
            <label htmlFor="genre">
              Genre:
              <span className={validGenre ? "valid": "hide"}>
                <FaCheck />
              </span> 
              <span className={validGenre || !genre ? "hide" : "invalid"}>
                <FaTimes />
              </span> 
            </label>
            <input 
              type="text"
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
              placeholder="Enter the genre."
              aria-invalid={validGenre ? "false" : "true"}
              aria-describedby="genrenote"
              onFocus={() => setGenreFocus(true)}
              onBlur={() => setGenreFocus(false)}
            />
            <p id="genrenote" className={genreFocus && genre && !validGenre ? "instructions" : "offscreen"}>
              <FaInfoCircle />
              Please enter a valid genre. <br />
              3 to 250 characters.<br />
              Letters, numbers, spaces, punctuation and the following symbols are allowed: @ &.
            </p>
          </div>
          {/* Description Section */}
          <div className="form-group">
            <label htmlFor="description">
              Description:
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              aria-describedby="descriptionnote"
              onFocus={() => setDescriptionFocus(true)}
              onBlur={() => setDescriptionFocus(false)}
            />
          </div>
          <button className="btn btn-block">Update Book Details</button>
        </form>
      </section>
    </> 
  )}



export default UpdateBookDetails
