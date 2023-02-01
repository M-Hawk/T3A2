import React from 'react'
import homeImage from '../images/homeImage.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <section className="heading">
        <h2>Welcome to the Wormreads Online Library</h2>
      </section>
      <img src={homeImage} className="homeImage" alt="Image of Books" /> 
      <p>Wormreads makes it easy to borrow a book any time, no matter where you are, for free. You can borrow a digital book from the extensive Wormread's library with just a few clicks. All you need to do is to sign up for an account and begin browsing. With a quick search, you'll find ebooks from a wide range of genres, from classics and sci-fi to self-help and history. Results can also be filtered by title, author, and genre. There are books for readers of all ages with more books being added every day. You're sure to find something new to read each time you browse. </p>
      <p>Authors are always remunerated appropriately for their work, and you have a whole fortnight to read each book you borrow. 
      </p>
      
    </div>
  )
}

export default Home