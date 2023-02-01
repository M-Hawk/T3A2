import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from "../apiConnect/axios"


const GET_BOOKS_URL = "api/bookdetails"

const Books = () => {

  const [books, setBooks] = useState([])
  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(GET_BOOKS_URL)
        const book = response.data
        setBooks(book)
      }
      catch (err){
        console.log(err.stack)
      }
    }
    fetchBooks()
    // Change this below to accept changes when new books are added or deleted
  }, [])

  
  return (
    <>
      {books.length ? (
        <section className="book-list">
          {books.map((book) => 
            <Card key={book._id}style={{ width: '18rem' }} className="book">
              <Card.Body>
              <Card.Title className="book-title">{book.title}</Card.Title>
                <div className="book-details">
                  <div><strong>Author:</strong> {book.author}</div>
                  <div><strong>Genre:</strong> {book.genre}</div>
                  <div><strong>Description:</strong> {book.description}</div>
                </div>
                <div className="book-button">
                  <Link to= {`/books/${book._id}`}>
                    <Button variant="success">More Info</Button>
                  </Link>
                  <Button variant="primary" onClick={() => editBookDetails(`/edit/${id}`)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleRemoveBook(id)}>Delete</Button>
                </div>
              </Card.Body>
            </Card>
          )}
        </section>
        )  : (
     <p style={{ marginTop: '2rem' }}>There are no books available at the moment</p>
     )}
    </>
  )
}

export default Books