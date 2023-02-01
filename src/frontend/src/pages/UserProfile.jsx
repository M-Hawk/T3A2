import {FaIdBadge } from "react-icons/fa"
import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import axios from "../apiConnect/axios"

const GET_USERS_URL = "api/users/"

const Users = () => {

  // const [users, setUsers] = useState([])
  
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get(GET_USERS_URL)
  //       const user = response.data
  //       setUsers(user)
  //     }
  //     catch (err){
  //       console.log(err.stack)
  //     }
  //   }
  //   fetchUsers()
  //   // Change this below to accept changes when new users are added or deleted
  // }, [])

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