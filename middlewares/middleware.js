const jwt = require('jsonwebtoken');

// Middleware to authenticate users based on JWT token
const authenticateUser = (req, res, next) => {
  // Get the token from the request headers
  const token = req.header('x-auth-token');

  // Check if the token is missing
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify and decode the token using your secret key (process.env.JWT_SECRET)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add the user information from the token to the request object
    req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.' });
  }
};

// Middleware to authorize users with admin permission
const authorizeAdmin = (req, res, next) => {
  // Check if the user has an 'admin' permission level
  if (req.user.permission_level === 'admin') {
    // User is authorized, continue to the next middleware or route handler
    next();
  } else {
    // User is not authorized, return a 403 Forbidden response
    res.status(403).json({ message: 'Access denied. You do not have permission.' });
  }
};

module.exports = {
  authenticateUser,
  authorizeAdmin,
};
