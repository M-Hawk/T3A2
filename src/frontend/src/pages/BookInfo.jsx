import { useRef, useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import axios from "../apiConnect/axios"
import { useNavigate } from "react-router-dom"
import UpdateBookDetails from "./UpdateBookDetails"

const BookInfo = ({ user }) => {

  // console.log(user._id)
  const [book, setBook] = useState([])
  const { id } = useParams()
  const ref = useRef()
  const [showEdit, setShowEdit] = useState(false) 

  // console.log(id)
  const navigateTo = useNavigate()

  const [msg, setMsg] = useState("") 

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get("api/bookdetails/" + id)

        setBook(response.data)
      }
      catch (err){
        console.log(err.stack)
      }
    }
    fetchBook()
  }, [])

  const borrowBook = async () =>{
    // console.log("borrow book")
    try {
      const token = localStorage.getItem("token")
      const response = await axios.post("api/loans/" + id, user,
        {
          headers: { "Authorization": `Bearer ${token}`}
        },
        )
      // console.log(response)
      if (response.data.message === "No Books are currently available") {
        // console.log(response.data.message)
        setMsg(response.data.message)
        ref.current.focus()
      }
      // console.log(response.data)
      // await setUser(response.data)
      else {
        navigateTo("/userprofile/:id")
      }
    } 
    catch (e) {
      if (e.response) {
        console.log(e.response)
      }
      if (!e?.response) {
        setMsg("No server response")
      } 
      else {
        setMsg("Borrow Book Failed")
      }
      errRef.current.focus()
    }
  }

  const handleRemoveBook = async () =>{
    // console.log("borrow book")
    try {
      const token = localStorage.getItem("token")
      const response = await axios.delete("api/bookdetails/" + id,
        {
          headers: { "Authorization": `Bearer ${token}`}
        },
        )

      navigateTo("/books")
      }
    catch (e) {
      if (e.response) {
        console.log(e.response)
      }
      if (!e?.response) {
        setErrMsg("No server response")
      } 
      else {
        setErrMsg("Delete Book Failed")
      }
    }
  }


  return (
    <>
      <section>
      <p ref={ref} className={msg ? "errmsg" : "offscreen"} aria-live="assertive">{msg}</p>
      </section>
      <section className="book-list">
          <Card bg="light" style={{ width: '100rem' }} className="book">
            <Card.Img variant="top" className="book-image one-book-image" src={book.imageDetailed} />
            <Card.Body>
            <Card.Title className="book-title">{book.title}</Card.Title>
              <div className="book-details">
                <div><strong>Author:</strong> {book.author}</div>
                <div><strong>Genre:</strong> {book.genre}</div>
                <div><strong>Description:</strong> {book.description}</div>
                <div><strong>Available Copies:</strong> {book.availableCopies}</div>
              </div>
              { user ? (
              <div className="book-button">
                <Button variant="success" onClick={()=> borrowBook()}>Borrow</Button>
                {user.isAdmin ? (
                <>
                  <Button variant="warning" onClick={() => setShowEdit(true)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleRemoveBook(id)}>Delete</Button>
                </>
                ) : ("")}
              </div> ) : ("")}
            </Card.Body>
          </Card>
      </section>
 
      { showEdit ? (
        <div>
          <UpdateBookDetails book={book} />
        </div> 
      ) : ("")}
    </>
  )
}

/* <Card style={{ width: '18rem' }} className="book">
<Card.Body>
  <Card.Title className="book-title">{title}</Card.Title>
  <div className="book-details">
    <div>Author: {author}</div>
    <div>Genre: {genre} </div>
    <div>Description: {description} </div>
  </div>
  <Button variant="danger" onClick={() => handleRemoveBook(id)}>
    Delete
  </Button>{' '}
  <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
    Edit
  </Button>
</Card.Body>
</Card> */
export default BookInfo