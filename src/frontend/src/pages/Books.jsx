import { useState } from "react"
import { Button, Card } from "react-bootstrap"

const Books = () => {


  // const [book, setBook] = useState(() => {
  //   return {
  //     title: book ? book.title : "",
  //     author: book ? book.author : "",
  //     genre: book ? book.genre : "",
  //     description: book ? book.description : "",
  //   }
  // })
  
  return (
    <section className="book-list">
      
      <Card style={{ width: '18rem' }} className="book">
        <Card.Body>
          <Card.Title className="book-title">Title</Card.Title>
          <div className="book-details">
            <div>Author: author</div>
            <div>Genre: genre</div>
            <div>Description: description</div>
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

      <Card style={{ width: '18rem' }} className="book">
        <Card.Body>
          <Card.Title className="book-title">Title</Card.Title>
          <div className="book-details">
            <div>Author: author</div>
            <div>Genre: genre</div>
            <div>Description: description</div>
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
export default Books