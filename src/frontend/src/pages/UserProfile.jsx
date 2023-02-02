import {FaIdBadge, FaBook } from "react-icons/fa"
import { Button, Card } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "../apiConnect/axios"
import avatarImage from '../images/femaleAvatar.png'

const Users = () => {

  const [user, setUser] = useState()
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

  if (user) {
     return (
    <>
      <section className="heading">
        <h2>
          <FaIdBadge /> User Profile
        </h2>
      <p>Hello! Please check your personal information, shown below:</p>
      <img src={avatarImage} className="avatarImage" alt="Image of Female Avatar" />
      </section>
      <section className="user-list">
        <Card style={{ width: '48rem' }} className="user">
          <Card.Body>
          <Card.Title className="user-title">Welcome {user.username}!</Card.Title>
            <div className="user-details">
              <div><strong>Username:</strong> {user.username}</div>
              <div><strong>Email:</strong> {user.email}</div>
              <div><strong>Date Joined:</strong> {user.createdAt}</div>
            </div>
            <div className="user-button">
              <Button variant="warning" onClick={() => editBookDetails(`/edit/${id}`)}>Update User Information</Button>
              <Button variant="danger" onClick={() => editBookDetails(`/edit/${id}`)}>Delete Account</Button>
            </div>
          </Card.Body>
        </Card>
      </section>
      <hr class="hr hr-blurry" />
      <section className="heading">
        <h2>
          <FaBook /> On Loan
        </h2>
      <p>You currently have the following books on loan:</p>
      <div><strong>Username:</strong> {user.username}</div>
      {user.booksOnLoan.length > 0 && <div><strong>Date Joined:</strong> {user.booksOnLoan[0].title}</div>}
      </section>
    </>
  ) } else {
    return (<p>Loading your data</p>)
  }
}

export default Users


// <div className="card" >
// <div className="card-body">
//   <h3 className="card-title">Welcome {user.username}!</h3>
//   <div className="book-details">
//     <h4><strong>Username:</strong> {user.username}</h4>
//     <h4><strong>Email:</strong> {user.email}</h4>
//   </div>
//   <a href="#" className="card-link">Update User Information</a>
//   <a href="#" className="card-link">Delete Account</a>
// </div>
// </div>
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