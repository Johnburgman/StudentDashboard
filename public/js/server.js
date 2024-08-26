const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Load users from JSON file
function loadUsers() {
    const filePath = path.join(__dirname, 'users.json');
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
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
    const filePath = path.join(__dirname, 'users.json');
    try {
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Error writing to users.json:', error);
    }
}

// Registration Route
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    // Load existing users
    const users = loadUsers();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add the new user
    users.push({ email, password: hashedPassword });

    // Save users back to the file
    try {
        fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(users, null, 2));
        res.status(201).send('User registered successfully');
    } catch (err) {
        console.error('Error writing users:', err);
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


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
