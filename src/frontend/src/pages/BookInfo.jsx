import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import axios from "../apiConnect/axios"
import { Link, useNavigate } from "react-router-dom"

const BookInfo = ( { user } ) => {


  const [book, setBook] = useState([])
  const { id } = useParams()
  const navigateTo = useNavigate()
  const [errMsg, setErrMsg] = useState("") 

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
    try {
      const response = await axios.post("api/loans/", JSON.stringify({ bookCopy: id, user }),
        {
          headers: {"Content-Type" : "application/json"}
        }
      )
      console.log(response.data)
      // redirect to home page
      navigateTo("/userprofile/:id")
    } 
    catch (err) {
      if (!err?.response) {
        setErrMsg("No server response")
      } 
      else {
        setErrMsg("Borrow Book Failed")
      }
    }
  }

  return (
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
            <div className="book-button">
              <Button variant="success" onClick={borrowBook}>Borrow</Button>
              <Button variant="warning" onClick={() => editBookDetails(`/edit/${id}`)}>Edit</Button>
              <Button variant="danger" onClick={() => handleRemoveBook(id)}>Delete</Button>{' '}
            </div>
          </Card.Body>
        </Card>
    </section>
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