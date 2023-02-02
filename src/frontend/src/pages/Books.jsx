import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from "../apiConnect/axios"

const BOOK_DESC_REGEX = /.+?\./
const GET_BOOKS_URL = "api/bookdetails"
const GET_COPIES_URL = "api/bookcopies"

export const randBookImg = () => {
  let imgUrls = 
  ["https://api.lorem.space/image/book?w=150&h=220&hash=8B7BCDC2",
  "https://api.lorem.space/image/book?w=150&h=220&hash=500B67FB",
  "https://api.lorem.space/image/book?w=150&h=220&hash=A89D0DE6",
  "https://api.lorem.space/image/book?w=150&h=220&hash=225E6693",
  "https://api.lorem.space/image/book?w=150&h=220&hash=9D9539E7",
  "https://api.lorem.space/image/book?w=150&h=220&hash=BDC01094",
  "https://api.lorem.space/image/book?w=150&h=220&hash=7F5AE56A",
  "https://api.lorem.space/image/book?w=150&h=220&hash=4F32C4CF",
  "https://api.lorem.space/image/book?w=150&h=220&hash=B0E33EF4",
  "https://api.lorem.space/image/book?w=150&h=220&hash=2D297A22",
  ]
  let random=  Math.floor((Math.random() * imgUrls.length))
  let randomImg=imgUrls[random]
  return randomImg
}

// Book images 
// alice in wonderland = https://covers.openlibrary.org/b/isbn/9781841353463-M.jpg
// pride and prejudice = https://covers.openlibrary.org/b/olid/OL40233763M-M.jpg
// frankenstein = https://covers.openlibrary.org/b/olid/OL14448179M-M.jpg
// the count of monte cristo = https://covers.openlibrary.org/b/olid/OL28434684M-M.jpg
// david copperfield = https://covers.openlibrary.org/b/olid/OL44248875M-M.jpg
// moby dick = https://covers.openlibrary.org/b/olid/OL29349220M-M.jpg
// les mis = https://covers.openlibrary.org/b/olid/OL27211583M-M.jpg
// dracula = https://covers.openlibrary.org/b/olid/OL31937676M-M.jpg
// virginia wolf = https://covers.openlibrary.org/b/olid/OL43705038M-M.jpg
// the sun also rises = https://covers.openlibrary.org/b/olid/OL974460M-M.jpg


const Books = () => {

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
            <Card key={book._id} bg="light" style={{ width: '18rem' }} className="book">
              <Card.Img variant="top" className="book-image" src= {randBookImg()} />
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