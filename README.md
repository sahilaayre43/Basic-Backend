Basic Backend — Blog Application

A beginner-friendly server-rendered blog application built with Node.js, Express, MongoDB, Mongoose, and EJS.

This project was created to practise backend fundamentals such as routing, database models, user authentication, cookies, JWT, middleware, and file uploads.

Features

- User registration and login.
- JWT-based authentication using cookies.
- Password hashing with Node.js crypto and HMAC-SHA256.
- Blog creation with title and content.
- Cover image uploads using Multer.
- MongoDB integration using Mongoose.
- Server-side rendering using EJS.
- Authentication middleware.

Tech Stack

Technology| Purpose
Node.js| JavaScript runtime
Express.js| Backend framework
MongoDB| Database
Mongoose| Database modelling
EJS| Server-side rendering
JWT| Authentication
Multer| File uploads
Cookie Parser| Cookie handling
Nodemon| Development server

Getting Started

Prerequisites

- Node.js and npm
- MongoDB
- Git

1. Clone the repository

git clone https://github.com/sahilaayre43/Basic-Backend.git

cd Basic-Backend

2. Install dependencies

npm install

3. Start MongoDB

Make sure your local MongoDB server is running.

The current application connects to:

mongodb://127.0.0.1:27017/

4. Start the application

Development mode:

npm run dev

Production-style start:

npm start

Open your browser:

http://localhost:8000

Application Routes

Method| Route| Description
GET| "/"| Homepage
GET| "/user/signup"| Registration page
POST| "/user/signup"| Register a user
GET| "/user/signin"| Login page
POST| "/user/signin"| Authenticate user
GET| "/user/logout"| Logout
GET| "/blog/add-blog"| Blog creation page
POST| "/blog"| Create a blog post

Project Structure

Basic-Backend/
├── middlewares/
│   └── authentication.js
├── models/
│   ├── blog.js
│   └── user.js
├── public/
│   └── uploads/
├── routes/
│   ├── blog.js
│   └── user.js
├── services/
│   └── authentication.js
├── views/
├── index.js
├── package.json
└── README.md

Authentication Workflow

1. Users register with their name, email, and password.
2. A random salt is generated before storing the password hash.
3. During login, the submitted password is hashed using the stored salt.
4. The generated hash is compared with the stored hash.
5. If credentials match, a JWT is generated.
6. The JWT is stored in a browser cookie.
7. Authentication middleware verifies the token and attaches user information to "req.user".
8. Users can log out by clearing the authentication cookie.

What I Learned

Through this project, I practised:

- Understanding Node.js and Express fundamentals.
- Building REST-style routes and handling HTTP requests.
- Working with MongoDB and Mongoose.
- Implementing JWT authentication.
- Understanding cookies and middleware.
- Hashing passwords.
- Handling file uploads using Multer.
- Organizing backend code into reusable modules.
- Rendering dynamic pages using EJS.

Current Limitations

This is a learning project, not a production-ready application.

Some areas that need improvement:

- Move hardcoded secrets and database configuration into environment variables.
- Replace HMAC-SHA256 password hashing with a password-specific algorithm such as Argon2id or bcrypt.
- Improve authentication and authorization checks.
- Add file type and file size validation.
- Configure secure cookie options.
- Implement proper input validation and error handling.
- Add automated tests.

Future Improvements

- Improve authentication and security.
- Add authorization for blog operations.
- Implement blog editing and deletion.
- Improve image upload validation.
- Add centralized error handling.
- Introduce automated testing.

---

Author: "Sahil Aayre" (https://github.com/sahilaayre43)
