import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from "../apiConnect/axios"

const BOOK_DESC_REGEX = /.+?\./
const GET_BOOKS_URL = "api/bookdetails"
const GET_COPIES_URL = "api/bookcopies"

const Books = ( {user} ) => {

  const [books, setBooks] = useState([])
  // const [bookCopies, setBookCopies] = useState([])

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

  // useEffect(() => {
  //   const fetchBookCopies = async () => {
  //     try {
  //       const response = await axios.get(GET_COPIES_URL)
  //       const book = response.data
  //       if(book.bookDetails.title === books.title) {
  //         setBookcopies(book)
  //       }
  //     }
  //     catch (err){
  //       console.log(err.stack)
  //     }
  //   }
  //   fetchBookCopies()
  //   // Change this below to accept changes when new books are added or deleted
  // }, [books])


  return (
    <>
      {books.length ? (
        <section className="book-list">
          {books.map((book) =>
            <Card key={book._id} bg="light" style={{ width: '24rem' }} className="book">
              <Card.Img variant="top" className="book-image" src= {book.imageList} />
              <Card.Body>
              <Card.Title className="book-title">{book.title}</Card.Title>
                <div className="book-details">
                  <div><strong>Author:</strong> {book.author}</div>
                  <div><strong>Genre:</strong> {book.genre}</div>
                  <div><strong>Description:</strong> {book.description.match(BOOK_DESC_REGEX)}</div>  
                </div>
                <div className="book-button">
                  <Link to= {`/books/${book._id}`}>
                    <Button variant="primary">More Info</Button>
                  </Link>
                  <Button variant="success" onClick={() => editBookDetails(`/edit/${id}`)}>Borrow</Button>
                  <Button variant="warning" onClick={() => editBookDetails(`/edit/${id}`)}>Edit</Button>
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