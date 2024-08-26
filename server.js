const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Path to users.json
const usersFilePath = path.join(__dirname, 'users.json');

// Load users from JSON file
function loadUsers() {
    if (!fs.existsSync(usersFilePath)) {
        // If file doesn't exist, return an empty array
        return [];
    }

    try {
        const data = fs.readFileSync(usersFilePath, 'utf-8');
        // If the file is empty, return an empty array
        if (!data) {
            return [];
        }
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading or parsing users.json:', error);
        return []; // Return empty array if there is an error
    }
}

// Save users to JSON file
function saveUsers(users) {
    try {
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Error writing to users.json:', error);
    }
}

// Registration Route
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    // Load existing users
    const users = loadUsers();

    // Check if user already exists
    if (users.find(u => u.email === email)) {
        return res.status(400).send('User already exists');
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Add the new user
        users.push({ email, password: hashedPassword });

        // Save users back to the file
        saveUsers(users);
        res.status(201).send('User registered successfully');
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Internal server error');
    }
});

// Login Route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Load existing users
    const users = loadUsers();

    // Find the user by email
    const user = users.find(u => u.email === email);

    if (user) {
        // Compare the provided password with the stored hashed password
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                res.status(200).send('Login successful');
            } else {
                res.status(401).send('Incorrect password');
            }
        });
    } else {
        res.status(404).send('User not found');
    }
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
