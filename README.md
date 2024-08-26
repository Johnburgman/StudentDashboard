# Student Dashboard

This is a web-based student dashboard application that allows users to register, log in, and access various features of the dashboard. The project is built using HTML, CSS, JavaScript, Node.js, and Express.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Packages](#packages)
- [Starting the Server](#starting-the-server)
- [Stopping the Server](#stopping-the-server)
- [License](#license)

## Features

- **User Registration**: Allows new users to register with their email and password.
- **User Login**: Authenticates users using their registered credentials.
- **Secure Passwords**: Passwords are hashed before being stored.
- **Dynamic Dashboard**: Displays personalized content after login.
- **Simple Navigation**: Easy access to different parts of the dashboard.

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/student-dashboard.git
   cd student-dashboard

Usage
Starting the Server
To start the server, run the following command in your terminal:

npm start

The server will start on http://localhost:3000. You can then open your browser and navigate to this URL to access the application.

Stopping the Server
To stop the server, press Ctrl + C in the terminal where the server is running.

Project Structure:

student-dashboard/
│
├── public/               # Contains static files like HTML, CSS, and client-side JS
│   ├── css/
│   │   ├── login.css
│   │   ├── register.css
│   ├── js/
│   │   └── script.js
│   ├── login.html
│   ├── register.html
│   ├── index.html
│
├── users.json            # JSON file to store registered users
├── server.js             # Main server file
├── package.json          # Contains project metadata and dependencies
├── package-lock.json     # Contains exact versions of dependencies
└── README.md             # Documentation file

Packages
The following packages are used in this project:

express: A fast, unopinionated, minimalist web framework for Node.js.
body-parser: Node.js body parsing middleware.
bcrypt: A library to help you hash passwords.
To install all the packages listed in package.json, run:

npm install

