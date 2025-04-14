const express = require('express');
const {addUser, login } = require('../controller/userController');
const router = express.Router();

// Routes
router
  .post('/register', addUser)     // Register user
  .post('/login', login);         // Login user — removed auth middleware

module.exports = router;
