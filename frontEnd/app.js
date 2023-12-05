const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Added for handling file paths

const app = express();
const port = 5000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (e.g., CSS, images) from the "public" directory
app.use(express.static('views'));

// Serve employee.html from the "public" directory
app.get('/employee', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/employee.html'));
});

app.get('/customer', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/customer.html'));
});

app.get('/documents', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/documents.html'));
});

// Login route (existing route)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/login.html'));
});

// Login route (existing route)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Basic validation, replace this with your authentication logic
  if (username === 'user' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.status(401).send('Invalid username or password');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
