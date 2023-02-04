import {FaIdBadge, FaBook } from "react-icons/fa"
import { Button, Card } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "../apiConnect/axios"
import avatarImage from '../images/femaleAvatar.png'
import checkStorageToken from "../App.jsx"

// Takes in user prop from App, user contains information stored in state of the logged in users details
const Users = ( {user} ) => {
  
  // const [ownProfile, setOwnProfile] = useState()

  const navigateTo = useNavigate()
  // console.log(user)
  useEffect(() => {
    const fetchOwnProfile = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get("api/users/" + user._id, {
          headers: { "Authorization": `Bearer ${token}` },
        })
        setOwnProfile(response.data)
      }
      catch (err){
        console.log(err.stack)
      }
    }
    fetchOwnProfile()
  }, [])

  // const userBooksLoan = async () => {
  //   const loansLength = await user.booksOnLoan.length
  // }

  return (
    <>
      {ownProfile ? (
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
            <Card.Title className="user-title">Welcome {ownProfile.username}!</Card.Title>
              <div className="user-details">
                <div><strong>Username:</strong> {ownProfile.username}</div>
                <div><strong>Email:</strong> {ownProfile.email}</div>
                <div><strong>User Id:</strong> {ownProfile._id}</div>
                <div><strong>Date Joined:</strong> {ownProfile.createdAt}</div>
                <div><strong>Number of Books on Loan:</strong> {ownProfile.booksOnLoan.length}</div>
              </div>
              <div className="user-button">
                <Button variant="success" onClick={() => editBookDetails(`/edit/${id}`)}>Update User Information</Button>
                <Button variant="primary" onClick={() => editBookDetails(`/edit/${id}`)}>Delete Account</Button>
              </div>
            </Card.Body>
          </Card>
        </section>

        <hr className="hr hr-blurry" />
        <section className="heading">
          <h2>
            <FaBook /> On Loan
          </h2>
        <p>You currently have the following books on loan:</p>
        </section>
        {ownProfile.booksOnLoan.length ? (
          <section className="book-list">
            {ownProfile.booksOnLoan.map((book) =>
              <Card bg="light" style={{ width: '24rem' }} className="book">
              <Card.Title> {book.title}!</Card.Title>
              <div className="book-details">
                        <div><strong>Author:</strong> {book.author}</div>
                        <div><strong>Genre:</strong> {book.genre}</div>
                        <div><strong>Description:</strong> {book.decription}</div>  
                      </div>
              </Card>
            )}
          </section>
          ) : (
          <p style={{ marginTop: '2rem' }}>You have no books on loan yet</p>
          )}
      </>
      ) : (navigateTo("/"))}
    </>
  )
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