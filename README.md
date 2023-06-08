
# EpyTodo

EpyTodo is the projet that introduced me in Web Development during my first year at Epitech.  
The goal was to create a functional Todo List application using Node.js and Express.  
The project focuses on the backend development, providing users with the ability to manage their tasks easily.  
In addition to the backend, any frontend was considered as a bonus. 
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<sub> - Create a MySQL database and note down the database name, username, and password.</sub>   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<sub> - Update the database configuration variables with your own values. (see .env)</sub>  