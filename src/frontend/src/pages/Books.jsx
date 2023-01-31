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
        const book = response.data.bookDetails
        // console.log(JSON.stringify(response.data))
        setBooks(book)
        console.log(book)
      }
      catch (err){
        console.log(err.stack)
      }
      // return(books)
    }
    fetchBooks()
  }, [])

  
  return (
    <>
    <p>Hello</p>
    <div>
    {books.map((book) => {
        <ul key ={book._id}>
          <li>Author: {book.author}</li>
        </ul>
    })}
    </div>

    </>
  )
}

// {books.length ? (
//   ) : (
//     <p style={{ marginTop: '2rem' }}>Your list is empty.</p>      )}

{/* 
<section className="book-list">
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
  </Card> */}

// const [books, setBooks] = useState(() => {
//   return {
//     title: setBooks ? books.title : "",
//     author: setBooks ? books.author : "",
//     description: setBooks ? books.description : "",
//     genre: setBooks ? books.genre : "",
//   }
// })

export default Books