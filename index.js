const express = require('express');
const cors = require('cors');
const connect = require('./connection/DBconnect');
const userRouter = require('./router/userRouter');
require('dotenv').config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to MongoDB
connect();

// Test route for frontend to call
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Use the user router for API routes
app.use('/api/users', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
