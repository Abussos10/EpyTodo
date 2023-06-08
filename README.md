
# EpyTodo

EpyTodo is the projet that introduced me to Web Development during my first year at Epitech.  
The goal was to create a functional Todo List application using Node.js and Express.  
The project focuses on the backend development, providing users with the ability to manage their tasks easily.
## Features

EpyTodo offers the following features :  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2611;&nbsp;&nbsp; User registration :  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<sub>Users can create an account by providing their email, password, name, and firstname.</sub>  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2611;&nbsp;&nbsp; User authentication :  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<sub>Users can log in to their account using their registered email and password.</sub>  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2611;&nbsp;&nbsp; User management :  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<sub>Users can view and update their own information, as well as delete their account.</sub>  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2611;&nbsp;&nbsp; Todo management :  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<sub>Users can create, view, update, and delete todos. Each todo includes a title, description, due time, status, and is assigned to a specific user.</sub>  

## Technologies Used

The project utilizes the following technologies and packages:

- **Node.js**: A JavaScript runtime environment for server-side development.
- **Express**: A web application framework for Node.js that simplifies the development of web servers and APIs.
- **MySQL**: A relational database management system used to store user and todo data.
- **dotenv**: A package for loading environment variables from a `.env` file into the application.
- **jsonwebtoken**: A package for generating and verifying JSON Web Tokens (JWT) used for user authentication.
- **bcryptjs**: A package for hashing passwords securely.
- **body-parser**: A package for parsing JSON data in the request body.
## Installation

To run the EpyTodo application locally, follow these steps:

&nbsp;&nbsp;&nbsp;**1.**&nbsp;&nbsp;&nbsp; Clone the repository :
```bash
    git clone git@github.com:Abussos10/EpyTodo.git
```  
&nbsp;&nbsp;&nbsp;**2.**&nbsp;&nbsp;&nbsp; Navigate to the project directory :
```bash
    cd EpyTodo
```  
&nbsp;&nbsp;&nbsp;**3.**&nbsp;&nbsp;&nbsp; Install the dependencies :
```bash
    npm install
```  
&nbsp;&nbsp;&nbsp;**4.**&nbsp;&nbsp;&nbsp; Set up the database :  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<sub> - Create a MySQL database and note down the database name, username, and password.</sub>   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<sub> - Update the database configuration variables with your own values. (see .env)</sub>  
&nbsp;&nbsp;&nbsp;**5.**&nbsp;&nbsp;&nbsp; Start the application :
```bash
    npm start
```  
&nbsp;&nbsp;&nbsp;**6.**&nbsp;&nbsp;&nbsp; Access the application in your browser at http://localhost:5000 :

## mySQL Tables

Here are the descriptions of the fields for each table in the MySQL database:

### User Table

| Field       | Description                                     |
| ----------- | ----------------------------------------------- |
| id          | Mandatory, auto-increments                      |
| email       | Mandatory, unique                               |
| password    | Mandatory                                      |
| name        | Mandatory                                      |
| firstname   | Mandatory                                      |
| created_at  | Set to the current datetime by default          |

### Todo Table

| Field       | Description                                     |
| ----------- | ----------------------------------------------- |
| id          | Mandatory, auto-increments                      |
| title       | Mandatory                                      |
| description | Mandatory                                      |
| created_at  | Set to the current datetime by default          |
| due_time    | Mandatory, datetime                            |
| status      | Not started by default, can be: todo, in progress, done |
| user_id     | Mandatory, unsigned, references the id of the user assigned to the task |

## API Routes

Here is a list of all the routes of this project
| Route               | Method | Protected | Description                                                  |
| ------------------- | ------ | --------- | ------------------------------------------------------------ |
| /register           | POST   | No        | Register a new user                                          |
| /login              | POST   | No        | Authenticate and log in a user                               |
| /user               | GET    | Yes       | View the information of the currently logged-in user         |
| /user/todos         | GET    | Yes       | View all tasks of the currently logged-in user               |
| /users/:id or :email| GET    | Yes       | View the information of a specific user by ID or email       |
| /users/:id          | PUT    | Yes       | Update the information of a specific user by ID              |
| /users/:id          | DELETE | Yes       | Delete a specific user by ID                                  |
| /todos              | GET    | Yes       | View all todos                                               |
| /todos/:id          | GET    | Yes       | View a specific todo by ID                                    |
| /todos              | POST   | Yes       | Create a new todo                                            |
| /todos/:id          | PUT    | Yes       | Update a specific todo by ID                                  |
| /todos/:id          | DELETE | Yes       | Delete a specific todo by ID                                  |

The protected routes are only accessible by a user logged in using **jsonwebtoken**
## Conclusion

In conclusion, the EpyTodo project has provided a valuable introduction to web development, specifically focusing on the backend aspect. Building a Todo List application has allowed us to understand the fundamentals of creating RESTful APIs, handling database operations, and implementing user authentication using JSON Web Tokens (JWT).

I highly recommend using Postman, a popular API development tool, to test the provided routes and interact with the backend of the application. Since this project primarily focuses on the backend, using Postman will enable you to easily send requests and observe the responses without the need for a frontend interface.

Official documentation : https://www.postman.com/downloads/

Working on EpyTodo has been an engaging experience, sparking further curiosity and encouraging a deeper exploration of web develop  ment concepts. It has provided a solid foundation for understanding the interaction between the frontend and backend components of a web application.