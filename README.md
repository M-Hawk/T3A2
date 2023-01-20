# Wormreads Full-Stack Web Application

## Purpose

The purpose of this Full-Stack MERN application is to provide book readers with the         ability to borrow and read books in an online environment. All digital content available on Wormreads is free to borrow (subject to availability) and accessible through a web browser after registering to use the application. There are no subscription costs, no in-app purchases, and no late fees (digital titles are automatically returned on their due dates).

## Functionality / Features

Based on user story revision and driving factors, it has been determined that the following features and functions are required to make the application a viable product.

### Minimum viable product (MVP)

1. Users are able to borrow books for a requested time period before having access revoked after a time
2. Users are able to register an account and login
3. Users are able to view their currently available borrowed books and their expected return dates
4. Users are able to view a list of books available for borrowing, with the books details (name,genre,author,abstract)
5. Users are able to search and list books by Genre, Author or Name
6. Administrators are able to post new books into the database for listing
7. Administrators are able to view a list of ongoing and returned borrowed books
8. Administrators are able to update current books in the database
9. Administrators are able to delete books from the database

### Nice to have

10. Users are able to rate books from 0 to 5 stars
11. Users are able to make comments on books
12. Administrators are able to view book ratings to determine popularity of books for marketing purposes
13. Users are able to place a book on hold when all quantities of that book are already borrowed out

## Target Audience

This application aims to provide an online library service for any book readers that have access to an internet service. It benefits those who may be after a specific book or books that they cannot access locally, cannot afford or do not have the physical room to store.

Market research revealed that the key demographic characteristics of the target market is that they are of varying ages (ranging from teenages to seniors), educated, fluent in English, with a low to mid income level. They are also comfortable using internet services, environmentally conscious and consider themselves an avid reader. The application will specifically target those living in Australia.

## Tech Stack

Based on the web applications requirements, it has been determined that utilisation of the MERN stack would be the most suitable method of execution.

The benefit of using MERN in this manner is that the whole application can be completed using only the JavaScript programming language and JSON. This reduces cognitive load during development by reducing the need to switch between different languages of the front and back-end of the application. The MERN stack is ideal for applications that use JSON extensively and with a React front-end enabling dynamic web interfaces which allows a much nicer user experience with high frequency site visitation.

- **Front-End:** React
- **Back-End:** Express, Mongoose, Node.js
- **Database:** MongoDB
- **Hosting & Deployment:** MongoDB hosted on Atlas, Application hosted on Railway
- **Languages:** JavaScript, HTML, CSS
- **Project Management:** Trello
- **Design Architecture:** LucidChart
- **Wireframes and Sitemap:** Figma
- **Image Editing:** Image Optimiser and Microsoft Paint 3D

## Dataflow Diagram

![![Wormreads Dataflow Diagram](image.jpg)
](image.jpg)

## Application Architecture Diagram

![Wormreads Architecture Diagram](/docs/T3A2%20Full-Stack%20Application%20Architecture%20Diagram.png)

## User Stories

### Epic

Build and operate an online electronic book library for users to access books in their browser and read for a limited time period.

- As a library administrator, I want to be able to view, add, update and delete books in the library from my computer. This will allow me to attract more clients to the application by expanding the number of books they can borrow over time. It also allows me to correct any errors present in existing listings and delete books I no longer wish to lend. It would also be beneficial to be able to see which books are the most popular, and have been lent out the most frequently, so that I can order more of that specific book and add more books of that type, genre, era and author in the future. Furthermore I want to be able to see which books are currently lent out and to which customers. It would be good to have a customer’s access to a book revoked once their hire date has passed and a method to confirm that books have been returned.
- As an avid reader I want to be able to borrow books online and read the book on my web browser at any time during the loan period. I want to be able to browse different book genres and authors to find something appealing. I also want to be able to see which books are currently available and place a hold on items that are already checked out. It is important for me to be able to check how much time I have left on a book before it needs to be returned. It would be good to see which books were the most popular with other readers to help find something I am likely to enjoy and which to avoid. I do also enjoy writing comments to support my favourite authors and share my opinions with others to feel as though I am contributing to the reading community.

### Refined User Stories

1. I Jack as a bookworm, would really like to be able to borrow my favourite book online, so I can read and then return them, like a library.
2. I Sarah would like to login to my own E-Library account, so I can save a few books to read whilst I'm online, and view when they have to be returned.
3. I Jill really like the idea of scrolling through a list of E-Books so that I can clearly see which book tickles my fancy.
4. My name is Ken and I’m really specific in the way I like to view my books, I prefer them to be listed by their categories or genres, or even by Author’s, so that I can easily shortlist what I’d like to read.
5. As a library administrator I want to be able to list new books so that I can lend them out to other people and attract more clients.
6. As a library administrator I want to ensure books are returned to the system by the return date so that they can be read by more people.
7. As a library administrator I want to be able to update and delete existing books so that I can improve upon previous listings and fix any past mistakes I have made.
8. I Steve, as an indecisive reader, want to be able to view ratings and comments from other people about books to guide my decision about what to read so that I can ensure I am reading a popular well liked book.
9. I Janet, as an avid reader, want to be able to provide comments and ratings about a book so that I can share my opinions and thoughts, to help support the authors and books I love and help others decide if the book is worth reading.
10. As a library administrator I want to see which books are the most popular so that I can respond to customer demand and purchase more of this specific book and additional copies from this author and/or genre.
11. I’m Jess and I’m really set on reading a book when I’ve put my mind to it. It would be cool to be able to put a book on hold if it's already taken.

## Wireframes

![alt text](image.jpg)

![alt text](image.jpg)

![alt text](image.jpg)

## Project Management

## Trello Board Link

[Trello Board Link](https://trello.com/b/9dVZ6hYp/t3a2-full-stack-app)

![alt text](image.jpg)

![Trello Board Screenshot](/docs/Trello%20Board%20Screenshot.png)