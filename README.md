
<a name='Return'></a>

# Wormreads Full-Stack Web Application

[Railway Deployment (Wormreads)](https://wormreads-frontend-production.up.railway.app)

[Railway Deployment (Wormreads Backend)](https://wormreads-backend-production.up.railway.app)

[Github Repository Link](https://github.com/M-Hawk/T3A2-Wormreads)

[Manual Testing Backend Development and Production](docs/ManualTestingBackend.pdf)

[Manual Testing Frontend Development and Production](docs/FrontEndManualTesting.pdf)

[Trello Board Link](https://trello.com/b/9dVZ6hYp/t3a2-full-stack-app)

## Table of Contents

- [Purpose](#Purpose)
- [Functionality](#Functionality)
- [Target Audience](#Target-Audience)
- [Tech Stack](#Tech-Stack)
- [Testing](#Testing)
- [Project Management Methodology and Task Delegation](#Project-Management-Methodology)
- [Dataflow Diagram](#Dataflow-Diagram)
- [Application Architecture Diagram](#Application-Architecture-Diagram)
- [User Stories](#User-Stories)
- [Wireframes](#Wireframes)


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

- **Front-End:** React
- **Back-End:** Express, Mongoose, Node.js
- **Database:** MongoDB
- **Hosting & Deployment:** MongoDB hosted on Atlas, Application hosted on Railway
- **Languages:** JavaScript, HTML, CSS
- **Project Management:** Trello
- **Design Architecture:** LucidChart
- **Wireframes and Sitemap:** Figma
- **Image Editing:** Image Optimiser and Microsoft Paint 3D

### MERN 

Based on the web applications requirements, it has been determined that utilisation of the MERN stack would be the most suitable method of execution.

The benefit of using MERN in this manner is that the whole application can be completed using only the JavaScript programming language and JSON. This reduces cognitive load during development by reducing the need to switch between different languages of the front and back-end of the application. The MERN stack is ideal for applications that use JSON extensively and with a React front-end enabling dynamic web interfaces which allows a much nicer user experience with high frequency site visitation.

#### React

React is a declarative, free and open-source front-end JavaScript framework that was used to create the dynamic client-side of the application. It was used to build user interfaces and components. Declarative views made the source code more consistent, predictable, understandable, and easier to maintain and debug.  It is a “reactive” framework which allowed views for each state in the application to be designed and only the necessary components are updated and rendered when changes occur. This selective rendering results in performance boosts and improves the overall speed of the app. It is data driven as the focus is on updating data allowing React to take care of the rest of it (Lim, 2021).  Components talk to each other by sharing state information in the form of read-only properties to their child components and by callbacks to their parent components.

#### Node and Express

Node and Express together formed the middle tier web server of the stack. Node is an asynchronous, event driven, open-source JavaScript runtime environment that allowed JavaScript code to be executed in the web server. It allowed many connections to be handled concurrently using minimal resources. 

Express.js is a minimalist, flexible and fast web framework with robust models for URL routing and handling HTTP requests and responses. It has a range of HTTP utility methods and middleware that make it easier to develop this API. For example, it allowed handlers to be written for requests with different HTTP verbs (get, post, patch, put and delete) at different URL paths. Extra request processing "middleware" was also added at different points in the request handling pipeline. 

Making HTTP requests from the React.js front end, allows connections to be made with Express.js functions. This allows the application to communicate back and forth with the front end.  These functions then use MongoDB’s Node.js drivers (which can be done using callbacks or promises), to retrieve, add, update, or delete data in the MongoDB database.

#### MongoDB and Atlas

MongoBD was used as the backend database to store the application’s persistent data. It is a document database that is considered non-relational as it stores data in flexible documents and collections. Documents map to objects in JavaScript, allowing applications to be quickly created. MongoDB Atlas was used to deploy the MongoDB in a cloud server that can be run anywhere in the world. 

### Backend Libraries and Packages

#### Bcryptjs

Bcryptjs is an extension used to protect passwords using bcrypt hashing based on the Blowfish cipher. This involves transforming a string of characters (of any length) into a fixed-length value. The hashing function will always produce the same output given the same input. Changing even one character in the original string will significantly change the resulting hash. It also incorporates salt for protecting the application against any rainbow table attacks. A rainbow table contains a series of precomputed hash values which could be used to find commonly used passwords (as shown in the image below). To overcome this issue a “salt” (a random value) is added to the original message before it's hashed (Okta, 2022). Bcrypt hashing functions can be deliberately made slower to prevent brute force attacks.

![Rainbow Table](/docs/RainbowTable.png)

#### Colors

Colors was used to add colours and styles to the node.js console. This made it easier during development to see when the database connection stream is successful.

![Colors Example](/docs/colorsExample.png)

#### Cors

CORS is a node.js package what provides a middleware that can be used to enable cross-origin resource sharing (CORS) with various options. By default, browsers prevent front-end clients talking to REST API’s. Requests sent from clients to server are blocked as a security mechanism to prevent malicious code being run. CORS can be used to circumvent this security feature. This uses additional HTTP headers to instruct browsers to give a web app running at one origin, access to selected resources from a different origin (Lim, 2021).  During development CORS  was used to allow  anyone to access to the database, in production the URL (domain) of the URL for the front end was passed in to only allow requests from that domain. 

#### Dotenv

Dotenv is a module used to set environment variables defined in the “.env” file. It  loads environment variables from the .env file into process.env. The . env file contains information about how to run the project such as where to run the application from, the port number and whether to run the application in debug mode. It is also used to contain configuration information that is sensitive such as the database connection stream as this contains a password and the JWT secret key (Pallets, 2010). This is more secure that hard coding them into the application.

#### Express-async-handler

This was used as an error handling middleware (executing during the request, response cycle) to handle exceptions inside of async express routes and pass them on to express error handlers. It overrides the default express error handler and was used to set the error code of exceptions and respond in JSON. This reduced the number of try—catch statements in the source code. 

#### Jsonwebtoken

Jsonwebtoken has been used to implement JSON Web Tokens (JWT) authentication in the API. JWT involves the server verifying the user's credentials and sending back an encrypted token to the client. The token is stored in local storage and added as an authorization header for subsequent requests. This is critical to protect personal information from unauthorised access. JWT is suitable because it is open standard, self-contained, compact, secure, and scalable (Okta, 2022). Information can be verified and trusted due to the use of digital signature using a secret key. (Andress, 2019). This helps ensure the person accessing the information is who they present themselves to be. Each individual user’s identity can be accessed via the JWT token which allows the application to serve resources to specific users.
It can be used to prevent a user from needing to login at each request. Jwt.sign was used to make JSON Web Tokens and jwt.verify was used to verify tokens. 

#### Mongoose

Mongoose is a third-party Object Data Modelling (ODM) library for MongoDB, that was used to  structure and access data more easily. It assisted with data modelling, schema enforcement, model validation, and data manipulation.  By default, MongoDB uses a flexible data model that is easily updated and altered. Mongoose, however, forces a semi-rigid schema where Schemas and Models are defined. Mongoose schemas map directly to MongoDB collections and are used to define their structure. Schemas are objects which consist of fields which were used to specify data types, whether they are required and many other validation requirements.  Models then take the schema and apply it to each document in the collection. Models were used to create, read, update, and delete (CRUD) documents.

#### Node-cron

The node-cron module was a task that allows tasks to be scheduled using full crontab syntax.  This allows a function to be run that would be executed at a specific time each day.  This was used to add a feature to automatically return any overdue books at the start of each day. 

#### Jest and Supertest (Development Dependency)

Jest is the JavaScript-based testing framework that was used as a development dependency to test both the front-end and back-end application against a number of assertions.  This allowed tests to be run with the test  results displayed on the terminal. SuperTest then provides a high-level abstraction for testing HTTP. This allows GET, POST, PUT, PATCH and DELETE requests to be tested.

#### Nodemon (Development Dependency)

Nodemon is a tool used in development to automatically restart the node application when file changes in the directory are detected. It operates as a replacement wrapper for node. It was used by replacing the word node  on the command line when executing the script.

### Front End Libraries and Packages 

#### Axios

Axios is a Javascript library used to send asynchronous HTTP requests to REST endpoints from node.js or XMLHttpRequests from the browser. It is used to allow the front-end to communicate with the backend and supports the Promise API native to JS ES6.  It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. It can also cancel requests. Axios has function names which match any HTTP methods. For example, to perform GET requests, the axios.get() method is used. This will get a promise which returns a response object. 

#### Bootstrap, React-Bootstrap

Bootstrap is a user Interface framework which contains a toolkit which made it quicker and easier to develop a responsive, stylised, and professional web application. Bootstap contains customisable HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.  React-Bootstrap is a component-based library that provides native Bootstrap components as pure React components. It converts JavaScript to React and bundles each component together.

#### React-dom

React-dom is a package which provides Document Object Model (DOM)-specific methods that can be used at the top level of an app and as an escape hatch to get outside the React model if required. It serves as the entry point to the DOM and server renderers for React.

#### React-icons

React-icons allowed popular icons (such as an icon of a user, book and house) to be easily add to the front-end application.

#### React-Router-DOM

React-router-dom is an npm package for React that enabled the application to implement dynamic routing and function as a single-page application. It allows the user to display pages and navigate around the site. It allows the applications to have many pages and components, but the page isn’t refreshed. Instead content is dynamically fetched based on the URL.

#### Vite and @vitejs/plugin-react

Vite (an alternative to create-react-app) was used to scaffold the React project and set up a development server that serves source files over native ES modules. It is a front-end tool that focuses on speed and performance. It has built-in features and fast Hot Module Replacement (HMR). Vite provides support for TypeScript, JSX, CSS, JSON and more.  

@vitejs/plugin-react which is the all-in-one Vite plugin for React was also added to extend Vite. For example, tt enables fast refresh in development, uses the automatic JSX runtime, removes the need to manualling import React in .jsx and .tsx modules and allows custom Babel plugins and pre-sets to be used.

#### @types/react and @types/react-dom

@types/react is a package that contains type definitions for React and @types/react-dom is a package that contains type definitions for React (react-dom)

## <a name='Testing'></a>Testing

### Backend Development and Deployment API Testing in PostMan

Manual testing of the backend was run using Postman to test to the endpoints of the API. This was done during development and again after production/deployment. A comprehensive table of the results was compiled and include here:

[Manual Testing Backend Development and Production](docs/ManualTestingBackend.pdf)

### Front End Development and Deployment 

Manual testing of the front end application was run in Chrome, Firefox and Edge during development then again after deployment and production. A comprehensive table of the results was compiled and include here:
[Manual Testing Front Development and Production](docs/FrontEndManualTesting.pdf)


## <a name='Project-Management-Methodology'></a>Project Management Methodology and Task Delegation

Trello was used to plan and track tasks for this project. This allowed work streams to be defined in lists, with user stories and Kanban methodology being implemented. The following lists were created:

- Grading Tracker: This list tracks the grade requirements for each expected assignment outcome.
- Backlog: A prioritised list of unplanned tasks that we intended to spend time on but haven't started yet. This is the staging area where tasks will get fleshed out. They are not in the current implementation plan.
- To-do: A prioritised list of planned work that is ready to be completed.
- Doing: A task currently being worked on. This allows the entire team to immediately see who is working on what and to ensure we don’t have too many ongoing tasks at the one time.
- Ongoing: A task that has been worked on, however is awaiting other tasks to be completed or requires refinement, revision or review prior to being marked as completed.
- Completed: All completed tasks
  
Tasks were delegated evenly though out this project between both team members. Each day we began a stand-up meeting with and real time video conference over Microsoft Meet. We begin by each briefly explaining what work we had completed since we last met and pulling each other’s changes from GitHub so that each day we began from the same place. We then discussed any blockers or issues we were facing to see if the other person had a possible solution and discussed what we had learned. We then decided which tasks we thought were the most important to complete in the next 24 hours and assigned them to the most appropriate team member based on their skill set.  We moved these to the Doing section of the Trello board and labelled them according to which team member was responsible for them.  

We remained on an extended video conference each day so that we could easily communicate with each other. This allowed us to:
-work together on critical sections of the code. We did this extensively in the beginning when we would watch videos together while one team member would code along and the other would check their work so that we could both learn how the front-end and back-end were set up. This slowed down the development process but allowed us to both gain the skills in all areas of the project and make important decisions together. 
-work independently but still ask each other advice immediately whenever issues arose
-make quick decisions together when required
-warn each other before reseeding the database or deleting/updating entries in a collection 

Throughout this project we each worked on a broad range of tasks so that we were both able to learn all areas of full stack development.  Many specific tasks, however, were assigned to team members to take advantage of their  interests and personal skills.  Matt is analytical, with meticulous attention to detail and an excellent problem solver. He was typically the member responsible for fixing bugs and issues in the code and completing the more challenging coding aspects of the project such as getting the borrow book function to work.  I am good at written communication and organisation, so I tended to complete documentation, testing, error handling on the back-end database and updating the Trello board. I am also creative so often worked on the design aspects of the application such as modifying bootstrap and CSS settings and creating the logo. 

[Trello Board Link](https://trello.com/b/9dVZ6hYp/t3a2-full-stack-app)

### Trello Board as at 16th Jan 2023

![Trello Board 16th Jan](/docs/Trello%20Board%2016%20Jan.jpg)

### Trello Board as at 18th Jan 2023

![Trello Board 18th Jan](/docs/Trello%20Board%2018%20Jan.png)

Features were added as tasks to complete in the Trello board. Each feature encompasses relevant user stories that have dictated the contents of the feature. The user stories that relate to each feature have been included in the description of each feature as shown here:

![Trello Board Features](/docs/Trello%20Board%20Features.jpg)

### Trello Board as at 20th Jan 2023

![Trello Board 20 Jan](/docs/Trello%20Board%20Screenshot.png)

### Trello Board as at 21st Jan 2023

![Trello Board 21 Jan](/docs/Trello%20Board%20Screenshot1.png)

### Trello Board as at 31st Jan 2023

![Trello Board 31 Jan](/docs/TrelloBoard31Jan.jpg)

### Trello Board as at 1st Feb 2023

![Trello Board 1 Feb](/docs/TrelloBoard1Feb.jpg)

### Trello Board as at 2nd Feb 2023

![Trello Board 2 Feb](/docs/TrelloBoard2Feb.jpg)

### Trello Board as at 3rd Feb 2023

![Trello Board 3 Feb](/docs/TrelloBoard3Feb.jpg)

### Trello Board as at 4th Feb 2023

![Trello Board 3 Feb](/docs/TrelloBoard4Feb.jpg)

### Trello Board as at 5th Feb 2023 (Morning of Due Date)

![Trello Board 3 Feb](/docs/TrelloBoard5FebAM.jpg)

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




[Return to Top](#Return)
