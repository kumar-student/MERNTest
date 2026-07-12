# ExpressJS - Cookies, Sessions, Authentication

### a. Write a program for session management using cookies and sessions.

**Aim**: 
Write a program for session management using cookies and sessions.

1. Install `cookie-parser`
```shell
npm install cookie-parser
```

2. Install `express-session`
```shell
npm install express-session
```

3. Create a file named `app.js` in **csa** (cookie-session-app) folder
```shell
mkdir csa
cd csa
```

4. Writing the code
```js
// app.js

const express = require('express');
const cookieParser = require('cookie-parser');    // For reading cookies
const session = require('express-session');

const app = express();
const PORT = 3000;

// --------MIDDLEWARE SETUP-------

// Parse cookies from client requests
app.use(cookieParser());

// Configure and use session middleware
app.use(session({
	secret: 'mySecretKey',    // Used to sign the session id cookie
	resave: False,        // Avoid saving session if not modified
	saveUninitialized: True,    // Save new session even if no data is added
	cookie: {maxAge: 60000}    // Session expires in 1 minutes = 60000 ms
}));

// --------COOKIE ROUTES-------

// Set a cookie on the browser
app.get('/set-cookie', (req, res) => {
	res.cookie('user', 'student123');    // Set a cookie named 'user'
	res.send('Cookie has been set on the browser.');
});

// Access the stored cookie
app.get('/get-cookie', (req, res) => {
	const user = req.cookie.user;
	res.send(`Cookie Value: ${user}`);
});

// --------SESSION ROUTES--------

// Create a session for the user (like login)
app.get('/login', (req, res) => {
	req.session.username = 'student123';    // Store user info in session
	res.send(`Session created. Your session id: ${req.sessionID}`);
});

// Access session data
app.get('/profile', (req, res) => {
	if(req.session.username) {
		res.send(`Welcome, ${req.session.username}. Your session id: ${req.sessionID}`);
	}
	else {
		req.send('No session found. Please login first.');
	}
});

// Destroy session and logout
app.get('/logout', (req, res) => {
	req.session.destroy(err => {
		if(err)
			return res.send('Error during logout.');
		res.send('Logged out successfully. Session destroyed.');
	});
});

// --------START SERVER--------
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
```

5. Run the server
```shell
node app.js
```

> Place output images here

**Viva Questions**:
1. What is the difference between cookies and sessions?
2. How do you set a session in ExpressJS?
3. How do you read cookies in ExpressJS?
4. Why is a secret key required in `express-session`?
5. How can you destroy a session and clear cookies?
### b. Write a program for user authentication

**Aim**:
Write a program for user authentication

```js
// auth.js

// Import required modules
const express = require('express');    // Express framework
const session = require('express-session');    // For managing sessions
const bodyParser = require('body-parser');    // To parse form data from POST requests

const app = express();
const PORT = 3000;

// Middleware to parse application/x-www-form-urlencoded (form data)
app.use(bodyParser.urlencoded({extended: True}));

// Configure session middleware
app.use(session({
	secret: 'secretKey123',    // Secret key to sign the session ID cookie (should be private and strong)
	resave: False,    // Do not save session if unmodified
	saveUninitialized: True,    // Save new sessions even if they are not modified
	cookie: {maxAge: 60000}    // Session expires after 1 minutes = 60000 ms
}));

// Dummy user details (in real applications, these should be stored in a database)
const dummyUser = {
	username: 'student',
	password: '1234'
};

// Route: GET /
// Display a simple login form
app.get('/', (req, res) => {
	res.send(`
		<h2>Login page</h2>
		<form method="POST" action="/login">
			Username: <input type="text" name="Username" /><br/>
			Password: <ipnut type="password" name="password" /><br/>
			<button type="submit">Login</button>
		</form>
	`);
});

// Route: POST /login
// Handle form submission and perform authentication
app.post('/login', (req, res) => {
	const {username, password} = req.body;
	
	// Check if the entered username and password match the dummy user
	if(username === dummyUser.username && password === dummyUser.password) {
		// Store user info in the session object
		req.session.user = username;
		res.send(`
			<p><strong>Authentication successful!</strong></p>
			<p>Welcome, ${username}</p>
			<p>Your session ID is: <strong>${req.sessionID}</strong></p>
			<p><a href="/dashboard">Go to dashboard</a></p>
		`);
	}
	else {
		// If credentials are invalid, show error
		res.send(`<p>Invalid credentials. <a href="/">Try again</a></p>`);
	}
});

// Route: GET /dashboard
// Show dashboard only if the user is logged in
app.get('/dashboard', (req, res) => {
	if(req.session.user) {
		res.send(`
			<h2>Welcome to dashboard, ${req.session.user}</h2>
			<p>This page is protected and only visible to logged-in users.</p>
			<p><a href="/logout">Logout</a></p>
		`);
	}
	else {
		res.send(`<p>Unauthorized access. Please <a href="/">login</a> first.</p>`);
	}
});

// Route: GET /logout
// Destroy the session and clear session cookie
app.get('/logout', (req, res) => {
	req.session.destroy(err => {
		if(err) {
			return res.send("Error logging out.");
		}
		res.clearCookie('connect.sid');    // Clear session cookie from browser
		res.send(`<p>You have been logged out. <a href="/">Login</a> again</p>`);
	});
});

// Start the server on port 3000
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
```

Run the server
```shell
node auth.js
```

**Viva Questions**:
1. How does session-based authentication work in ExpressJS?
2. How do you protect routes so only logged-in users can access them?
3. Why is it important to destroy a session on logout?
4. What middleware is used for parsing POST request data?
5. How can authentication be enhanced in real-world applications?
