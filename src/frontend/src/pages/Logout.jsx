import { useState, useEffect} from "react"
import { Card } from "react-bootstrap"

const Logout = ({ setUser }) => {

  useEffect(() => {
    localStorage.removeItem("token")
    setUser(null)
  }, [])

  return (
    <Card>
      <Card.Body className="logout-card">
      <Card.Title className="user-title">See you next time!</Card.Title>
        <div className="user-details">
          <div className="logout-text"><strong>Come back soon for more great reading, our library is regularly being updated with new books.</strong></div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Logout