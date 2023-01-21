
<a name='Return'></a>

# Wormreads Full-Stack Web Application

[Github Repository Link](https://github.com/M-Hawk/T3A2-Wormreads)

## Table of Contents

- [Purpose](#purpose)
- [Functionality](#Functionality)
- [Target Audience](#Target-Audience)
- [Tech Stack](#Tech-Stack)
- [Dataflow Diagram](#Dataflow-Diagram)
- [Application Architecture Diagram](#Application-Architecture-Diagram)
- [User Stories](#User-Stories)
- [Wireframes](#Wireframes)
- [Project Management](#Project-Management)

## <a name='Purpose'></a>Purpose

The purpose of this Full-Stack MERN application is to provide book readers with the         ability to borrow and read books in an online environment. All digital content available on Wormreads is free to borrow (subject to availability) and accessible through a web browser after registering to use the application. There are no subscription costs, no in-app purchases, and no late fees (digital titles are automatically returned on their due dates).

## <a name='Functionality'></a>Functionality

Based on user story revision and driving factors, it has been determined that the following features and functions are required to make the application a viable product.

### Minimum viable product (MVP)

1. Users are able to borrow books for a requested time period before having access revoked after a time
2. Users are able to register an account and login
3. Users are able to view their currently available borrowed books and their expected return dates
4. Users are able to view a list of books available for borrowing, with the books details (name,genre,author,abstract)
5. Users are able to search and list books by Genre, Author or Name
6. Administrators are able to post new books into the database for listing
7. Administrators are able to view a list of ongoing borrowed books
8. Administrators are able to update current books in the database
9. Administrators are able to delete books from the database

### Nice to have

10. Users are able to rate books from 0 to 5 stars
11. Users are able to make comments on books
12. Administrators are able to view book ratings to determine popularity of books for marketing purposes
13. Users are able to place a book on hold when all quantities of that book are already borrowed out

## <a name='Target-Audience'></a>Target Audience

This application aims to provide an online library service for any book readers that have access to an internet service. It benefits those who may be after a specific book or books that they cannot access locally, cannot afford or do not have the physical room to store.

Market research revealed that the key demographic characteristics of the target market is that they are of varying ages (ranging from teenages to seniors), educated, fluent in English, with a low to mid income level. They are also comfortable using internet services, environmentally conscious and consider themselves an avid reader. The application will specifically target those living in Australia.

## <a name='Tech-Stack'></a>Tech Stack

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

## <a name='Dataflow-Diagram'></a>Dataflow Diagram

The following dataflow diagrams (DFD) were created to illustrate the flow of data through the application. 

### Users

This DFD is used to show how data is exchanged to log-in and register a new user. 

![User Registration](/docs/Wormreads%20User%20log-in%20and%20register%20DFD.jpeg)

Users can also search or browse for a book based on search fields, get more details on a specific book, and borrow a book. They can also view their own user information including which books they have borrowed and when each is due to be returned. The flow of data throughout these activities is depicted in this DFD:  

![User Actions](/docs/Wormreads%20User%20Actions%20DFD.jpeg)

### Admins

The following DFD depicts how data will flow throughout the application when an  admin user adds, modifies, or deletes book details from the database.  This involves the CRUD functionality for the Book Details Collection. This is a collection which will store details about each book (title, author and genre). It also includes how data is exchanged when viewing all borrowings and all users in the database. Only users who have a valid JSON token (received after successfully logging in) and isAdmin set to true in their users document will be permitted access to these routes.  

![Admin Actions](/docs/Admin%20Routes%20DFD%20Part%201.jpg)

Another collection called Books is also required to store details about each individual book including the book id, book details id (from the book details collection) and whether it is available. This dataflow diagram depicts how data is changed when adding, updating, and deleting books in this collection. Again only users who have a valid JSON token (received after successfully logging in) and isAdmin set to true in their users document will be permitted access to these routes.  
 

![Admin CRUD Commands](/docs/Admin%20Routes%20(Book%20CRUD%20routes)%20DFD.jpeg)

## <a name='Application-Architecture-Diagram'></a>Application Architecture Diagram

![Wormreads Architecture Diagram](/docs/T3A2%20Full-Stack%20Application%20Architecture%20Diagram.png)

##  <a name='User-Stories'></a>User Stories

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

##  <a name='Wireframes'></a>Wireframes

### User

![Home Page](/docs/Home%20Page%20Wireframe.png)

![Register User Page](/docs/User%20Register%20Page%20Wireframe.png)

![User Profile Page](/docs/User%20Profile%20Page%20Wireframe.png)

![Books List Page](/docs/Books%20List%20Page%20Wireframe.png)

![Book Page](/docs/Books%20Page%20Wireframe.png)

![Comments Page](/docs/Comments%20Page%20Wireframe.png)

### Admin

![Admin User Profile Page](/docs/Admin%20User%20Profile%20Page%20Wireframe.png)

![Update Book Page](/docs/Update%20Books%20Page%20Wireframe.png)

![Add Book Page](/docs/Add%20Book%20Page%20Wireframe.png)

![View Borrowings Page](/docs/View%20Borrowings%20Page%20Wireframe.png)

## <a name='Project-Management'></a>Project Management

[Trello Board Link](https://trello.com/b/9dVZ6hYp/t3a2-full-stack-app)

Trello was used to plan and track tasks for this project. This allowed work streams to be defined in lists, with user stories and Kanban methodology being implemented. The following lists were created:

Grading Tracker: This list tracks the grade requirements for each expected assignment outcome. 
- Backlog: A prioritised list of unplanned tasks that we intended to spend time on but haven't started yet. This is the staging area where tasks will get fleshed out. They are not in the current implementation plan.
- To-do: A prioritised list of planned work that is ready to be completed.
- Doing: A task currently being worked on. This allows the entire team to immediately see who is working on what and to ensure we don’t have too many ongoing tasks at the one time. 
- Ongoing: A task that has been worked on, however is awaiting other tasks to be completed or requires refinement, revision or review prior to being marked as completed.
- Completed: All completed tasks

### Trello Board as at 16th Jan 2023
![Trello Board 16th Jan](/docs/Trello%20Board%2016%20Jan.jpg)
### Trello Board as at 18th Jan 2023
![Trello Board 18th Jan](/docs/Trello%20Board%2018%20Jan.png)

Features were added as tasks to complete in the Trello board. Each feature encompasses relevant user stories that have dictated the contents of the feature. The user stories that relate to each feature have been included in the description of each feature as shown here:

![Trello Board Feature](/docs/Trello%20Board%20Features.jpg)
### Trello Board as at 20th Jan 2023
![Trello Board Screenshot](/docs/Trello%20Board%20Screenshot.png)
### Trello Board as at 21st Jan 2023
![Trello Board Screenshot1](/docs/Trello%20Board%20Screenshot1.png)

[Return to Top](#Return)
