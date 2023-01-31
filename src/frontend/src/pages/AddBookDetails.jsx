import { useRef, useState, useEffect } from "react"
import { generatePath } from "react-router-dom"
// import { FaUser, FaInfoCircle, FaCheck, FaTimes} from "react-icons/fa"
import axios from "../apiConnect/axios"

const TITLE_REGEX = /^[A-z][A-z0-9-_]{3,49}$/
const AUTHOR_REGEX = /^[A-z][A-z0-9-_]{3,49}$/
const GENRE_REGEX = /^[A-z][A-z0-9-_]{3,49}$/
const DESCRIPTION_REGEX = /^[A-z][A-z0-9-_]{3,249}$/

const ADD_BOOK_DETAILS_URL = "/api/bookdetails"

const AddBookDetails = () => {
  const titleRef = useRef()
  const errRef = useRef()

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
    console.log(result)
    console.log(title)
    setValidTitle(result)
  }, [title])

  useEffect(() => {
    const result = AUTHOR_REGEX.test(author)
    console.log(result)
    console.log(author)
    setValidAuthor(result)
  }, [author])

  useEffect(() => {
    const result = GENRE_REGEX.test(genre)
    console.log(result)
    console.log(genre)
    setValidGenre(result)
  }, [genre])

  useEffect(() => {
    const result = DESCRIPTION_REGEX.test(description)
    console.log(result)
    console.log(description)
    setValidTitle(result)
  }, [description])





  return (

  )
}

export default AddBookDetails