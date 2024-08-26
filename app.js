const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Route for the login page
app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'views', 'login.html'));
});

// Route for the register page
app.get('/register', (req, res) => {
    res.render(path.join(__dirname, 'views', 'register.html'));
});

// Handle registration
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Read the existing users
    let users = JSON.parse(fs.readFileSync('./data/users.json'));

    // Check if the user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.send('User with this email already exists.');
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Add the new user
    users.push({ name, email, password: hashedPassword });
    fs.writeFileSync('./data/users.json', JSON.stringify(users, null, 2));

    res.send('Registration successful! <a href="/">Login here</a>');
});

// Handle login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Read the existing users
    let users = JSON.parse(fs.readFileSync('./data/users.json'));

    // Find the user by email
    const user = users.find(user => user.email === email);
    if (user && bcrypt.compareSync(password, user.password)) {
        return res.send(`Login successful! Welcome, ${user.name}!`);
    } else {
        return res.send('Invalid email or password.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
