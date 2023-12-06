require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (e.g., CSS, images) from the "public" directory
app.use(express.static('frontEnd/views'));

// Serve HTML files
app.get('/employee', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd/views/employee.html'));
});
// Root path route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd/views/login.html'));
});

app.get('/customer', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd/views/customer.html'));
});

app.get('/documents', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontEnd/views/documents.html'));
});

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are correct (you can replace this with your database logic)
  if (username === 'user' && password === 'password') {
    
    res.send('Login successful');
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Logout Route
app.post('/logout', (req, res) => {
  // In this simplified example, we don't handle JWT or authentication
  res.send('Logout successful');
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
