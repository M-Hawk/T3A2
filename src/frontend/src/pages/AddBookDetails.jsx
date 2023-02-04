import { useRef, useState, useEffect } from "react"
import { FaUser, FaInfoCircle, FaCheck, FaTimes} from "react-icons/fa"
import axios from "../apiConnect/axios"
import { Link, useNavigate } from "react-router-dom"

const TITLE_REGEX = /^[A-Za-z0-9\s\-_,\.;:@&()]{3,250}$/
const AUTHOR_REGEX = /^[A-Za-z0-9\s\-_,\.;:@&()]{3,250}$/
const GENRE_REGEX = /^[A-Za-z0-9\s\-_,\.;:@&()]{3,250}$/
const DESCRIPTION_REGEX = /^[A-Za-z0-9\s\-_,\.;:@&()]+$/

const ADD_BOOK_DETAILS_URL = "/api/bookdetails"

const AddBookDetails = ({book}) => {
  const titleRef = useRef()
  const errRef = useRef()
  const navigateTo = useNavigate()

  const [title, setTitle] = useState("") 
  const [validTitle, setValidTitle] = useState(false)
  const [titleFocus, setTitleFocus] = useState(false)

  const [author, setAuthor] = useState("") 
  const [validAuthor, setValidAuthor] = useState(false)
  
  const [authorFocus, setAuthorFocus] = useState(false)

  const [genre, setGenre] = useState("") 
  const [validGenre, setValidGenre] = useState(false)
  const [genreFocus, setGenreFocus] = useState(false)

  const [description, setDescription] = useState("") 
  const [validDescription, setValidDescription] = useState(false)
  const [descriptionFocus, setDescriptionFocus] = useState(false)

  const [errMsg, setErrMsg] = useState("") 
  const [success, setSuccess] = useState(false)

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

  useEffect(() => {
    const result = DESCRIPTION_REGEX.test(description)
    setValidDescription(result)
  }, [description])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(ADD_BOOK_DETAILS_URL, JSON.stringify({ title, author, genre, description }),
        {
          headers: {"Content-Type" : "application/json"}
        }
      )
      // Delete these console logs after
      navigateTo("/books")
    } 
    catch (err) {
      if (!err?.response) {
        setErrMsg("No server response")
      } 
      else if (err.response?.status === 409) {
        setErrMsg("Error Occured")
      }
      else {
        setErrMsg("Add Book Details Failed")
      }
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
            <FaUser /> Add New Book Details
          </h2>
          <p>Please enter the book details associated with the book you would like to add</p>
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
              id="title"
              ref= {titleRef}
              onChange={(e) => setTitle(e.target.value)}
              required
              value={title}
              placeholder="Enter the book's title"
              aria-invalid={validTitle ? "false" : "true"}
              aria-describedby="titlenote"
              onFocus={() => setTitleFocus(true)}
              onBlur={() => setTitleFocus(false)}
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
              onChange={(e) => setAuthor(e.target.value)}
              required
              placeholder="Enter the author."
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
              <span className={validDescription ? "valid": "hide"}>
                <FaCheck />
              </span> 
              <span className={validDescription || !description ? "hide" : "invalid"}>
                <FaTimes />
              </span> 
            </label>
            <input
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Enter the book's description"
              aria-invalid={validDescription ? "false" : "true"}
              aria-describedby="descriptionnote"
              onFocus={() => setDescriptionFocus(true)}
              onBlur={() => setDescriptionFocus(false)}
            />
            <p id="descriptionnote" className={descriptionFocus && description && !validDescription ? "instructions" : "offscreen"}>
              <FaInfoCircle />
              Please enter a valid description. <br />
              Letters, numbers, spaces, punctuation and the following symbols are allowed: @ &.
            </p>
          </div>
          <button className="btn btn-block">Add Book Details</button>
        </form>
      </section>
    </> 
  )}



export default AddBookDetails