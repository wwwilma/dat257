// Import necessary dependencies
const express = require('express');
const {getUsers, getUserName, getAllHabits, getTimesDone, incrementTimesDone, getFavoriteHabits, setFavoriteHabit} = require('./database-connection');

// Create an Express app
const app = express();
const port = 3001;

// Enable JSON parsing for incoming requests
app.use(express.json());

// Set up Cross-Origin Resource Sharing (CORS) headers to allow requests from a specific origin (localhost:3000 in this case)
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next(); // Proceed to the next middleware
});

// Define the GET '/users'
// This retrieves all users in the database
app.get('/users', (req, res) => {
    getUsers()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

// Define the GET '/users/:userID'
// This retrieves a specified users name in the database
app.get('/users/:userID', (req, res) => {
    const userId = req.params.userID; // Extract the user ID from the request parameters
    getUserName(userId)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});
// Define the GET '/habits'
// This retrieves all habits in the database
app.get('/habits', (req, res) => {
    getAllHabits()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});
// Define the GET '/trackers/:userID/:habitID'
// This retrieves counter for a specific user and habit in the database.
app.get('/trackers/:userID/:habitID', (req, res) => {
    const userId = parseInt(req.params.userID)
    const habitId = parseInt(req.params.habitID)
    getTimesDone(userId, habitId)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});


// Define the POST '/trackers/:userID/:habitID'
// This posts how many times a user has clicked on a specific habit in the database.
app.post('/trackers/:userID/:habitID', (req, res) => {
    const userId = parseInt(req.params.userID);
    const habitId = parseInt(req.params.habitID);
    const count = parseInt(req.body.count)
    incrementTimesDone(userId, habitId, count)
        .then(() => {
            res.status(200).send('Times done updated');
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

app.get('/favoritehabits/:userID', (req, res) => {
    const userId = parseInt(req.params.userID)
    getFavoriteHabits(userId)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

app.post('/favorite/:userID/:habitID', (req, res) => {
    const userId = parseInt(req.params.userID);
    const habitId = parseInt(req.params.habitID);
    const favorite = parseInt(req.body.favorite);
    setFavoriteHabit(userId, habitId, favorite)
        .then(() => {
            res.status(200).send('Favorite updated');
        })
        .catch(error => {
            res.status(500).send(error);
        });
});


// Start the Express app on the specified port
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
