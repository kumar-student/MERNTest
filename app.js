// app.js
const express = require('express');

const app = express();
const PORT = 3000;

// Middleware to log requests
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
});

// 1. Define and Handling a basic route
app.get('/', (req, res) => {
	res.send('Welcome to the Home page!');
});

// 2. Route parameters - /user/:id
app.get('/user/:id', (req, res) => {
	const userId = req.params.id;
	res.send(`User id received: ${userId}`);
});

// 3. Query parameters - /search?keyword=books&type=pdf
app.get('/search', (req, res) => {
	const { keyword, type } = req.query;
	res.send(`Search Query Received - Keyword: ${keyword}, Type: ${type}`); 
});

// 4. URL building example (internal redirect)
app.get('/redirect-to-user/:name', (req, res) => {
	const name = req.params.name; // Build a new URL to redirect
	const userProfileURL = `/profile/${name}?details=full`; res.redirect(userProfileURL);
});

// 5. Profile Page using both route and query params 
app.get('/profile/:name', (req, res) => {
	const name = req.params.name; const details = req.query.details;
	res.send(`Profile Page of ${name} - Details: ${details}`); 
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`); 
});
