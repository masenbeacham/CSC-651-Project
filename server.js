require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: 'secret', 
    resave: false,
    saveUninitialized: true,
  })
);

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
  if (req.session.isLoggedIn) {
    // Render the protected page
    res.sendFile(path.join(__dirname, 'frontEnd/views/documents.html'));
  } else {
    res.redirect('/');
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are correct
  if (username === 'admin' && password === 'password') {
    req.session.isLoggedIn = true;
    
    res.redirect('/documents');
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Logout Route
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Error destroying session:', err);
    }
    // Redirect the user to the login page
    res.redirect('/');
  });
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
