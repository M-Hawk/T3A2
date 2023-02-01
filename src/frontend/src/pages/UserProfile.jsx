import {FaIdBadge } from "react-icons/fa"
import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import axios from "../apiConnect/axios"

const Users = () => {

  const [users, setUser] = useState([])
  const { id } = useParams()
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("api/users/" + id)
        setUser(response.data)
      }
      catch (err){
        console.log(err.stack)
      }
    }
    fetchUser()
  }, [])

  return (
    <>
      <section className="heading">
        <h2>
          <FaIdBadge /> User Profile
        </h2>
      <p>Login and start borrowing books!</p>


    </section>
    <div class="b-example-divider"></div>
    <section className="heading">
        <h2>On loan</h2>
    </section>
    <div className="card" >
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="card-link">Card link</a>
      <a href="#" className="card-link">Another link</a>
    </div>
</div>

    </>
  )
}

export default Users

// {users.length ? (
//   <section className="user-list">
//     {users.map((user) => 
//       <Card style={{ width: '18rem' }} className="user">
//         <Card.Body>
//         <Card.Title className="book-title">{user.username}</Card.Title>
//           <div className="book-details">
//             <div>Username: {user.username}</div>
//             <div>Email: {user.email}</div>
//           </div>
//           <div className="book-button">
//             <Button variant="danger" onClick={() => handleRemoveBook(id)}>
//               Delete
//             </Button>{' '}
//             <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
//               Edit
//             </Button>
//           </div>
//         </Card.Body>
//       </Card>