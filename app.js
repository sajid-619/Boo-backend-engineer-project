const express = require('express');
const app = express();
const profileRoutes = require('./routes/profiles');

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/profiles', profileRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
