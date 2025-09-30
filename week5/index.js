const express = require('express');
const path = require('path');
const app = express();
const userRouter = require('./routes/user');

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static('public'));

// Mount user routes
app.use('/api/v1/user', userRouter);

// Serve home.html on /home
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send('Server Error');
});

// Start the server
app.listen(process.env.PORT || 8081, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 8081));
});