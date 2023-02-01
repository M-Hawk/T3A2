import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import axios from "../apiConnect/axios"

const GET_BOOKS_URL = "api/bookdetails"

const Books = () => {

  const [books, setBooks] = useState([])
  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(GET_BOOKS_URL)
        const book = response.data
        console.log(book)
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
            <Card style={{ width: '18rem' }} className="book">
              <Card.Body>
              <Card.Title className="book-title">{book.title}</Card.Title>
                <div className="book-details">
                  <div>Author: {book.author}</div>
                  <div>Genre: {book.genre}</div>
                  <div>Description: {book.description}</div>
                </div>
                <div className="book-button">
                  <Button variant="danger" onClick={() => handleRemoveBook(id)}>
                    Delete
                  </Button>{' '}
                  <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
                    Edit
                  </Button>
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