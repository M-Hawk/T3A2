import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from "../apiConnect/axios"

const BOOK_DESC_REGEX = /.+?\./
const GET_BOOKS_URL = "api/bookdetails"
const GET_COPIES_URL = "api/bookcopies"

const Books = ({ user }) => {

  const [books, setBooks] = useState([])
  // const [bookCopies, setBookCopies] = useState([])
  const [errMsg, setErrMsg] = useState("")

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
  }, [books])

  async function handleRemoveBook(id){
    console.log(id)
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
      <span>
        {/* {put router link here} */}
        <Link className="btn btn-small" to="/books/add">Add a New Book</Link>
      </span>
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
                </div>
                { user ? (
                <div className="book-button">
                  <Button variant="success" onClick={()=> borrowBook}>Borrow</Button>
                  <Button variant="warning" onClick={() => editBookDetails(`/edit/${book._id}`)}>Edit</Button>
                  <Button variant="danger" onClick={() => handleRemoveBook(book._id)}>Delete</Button>
                </div> ) : ("")}
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