# ExpressJS – Routing, HTTP Methods, Middleware

Express.js (or simply Express) is the most popular Node.js web application framework, designed for building web applications and APIs.

Express.js is a minimal and flexible Node.js web application framework that provides a list of features for building web and mobile applications easily. It simplifies the development of serverside applications by offering an easy-to-use API for routing, middleware, and HTTP utilities. It's often called the de facto standard server framework for Node.js.

Express is a part of MERN stack, a full stack JavaScript solution used in building fast, robust, and maintainable production web applications.
MongoDB (Database) 
ExpressJS (Web Framework) 
ReactJS (Front-end Framework) 
NodeJS (Application Server)

**Key Characteristics** :
- Minimal and flexible
- Unopinionated (you decide how to structure your app)
- Lightweight and fast
- Extensible through middleware
- Huge ecosystem of plugins and extension

Express provides a thin layer of fundamental web application features without obscuring Node.js features.
- A robust routing system
- HTTP helpers (redirection, caching, etc.)
- Support for middleware to respond to HTTP requests
- A templating engine for dynamic HTML rendering
- Error handling middleware

Creating an Express.js application involves several steps that guide you through setting up a basic server to handle complex routes and middleware. Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

**Step 1** : Write this command to create a NodeJS application.
```shell
npm init
``` 
or 
```shell
npm init -y
```
for default initialization

**Step 2** : Install the necessary dependencies for our application. In this, we will install express.js dependency.
```shell
npm install express
```

**Step 3** : Create an app.js (or server.js) file. This will serve as the main entry point for your application.

Create `app.js` file in your project directory
```shell
touch app.js
```

or 

Create `app.js` manually in your project directory

Run the application using the following command
```shell
node app.js
```

We have created and run the server successfully, if your server is not starting then there may be some error, try to analyze and read that error and resolve it accordingly. Finally, after a successful run if you try to open the URL (localhost:3000) on the browser it will show you cannot GET / because we have not configured any route on this application yet.

**Step 4** : Now we will set all the routes for our application.
Routes are the endpoints of the server, which are configured on our backend server and whenever someone tries to access those endpoints they respond accordingly to their definition at the backend
```text
app.anyMethod(path, function)
```

Setting GET request route on the root URL
- Use `app.get()` to configure the route with the path '/' and a callback function.
- The callback function receives `req` (request) and res (response) objects provided by Express.
- `req` is the incoming request object containing client data, and res is the response object used to send data back to the client.
- Use `res.status()` to set the HTTP status code before sending the response.
- Use `res.send()` to send the response back to the client. You can send a string, object, array, or buffer. Other response methods include `res.json()` for JSON objects and `res.sendFile()` files.

**Step to run the application** : Save this code, restart the server, and open the localhost on the given port. When a client requests with the appropriate method on the specified path ex: GET request on '/' path, our function returns the response as plain text If we open the network section in Chrome developers tools (press Ctrl+Shift+I to open) we will see the response returned by the localhost along with all information. Setting up one more get request route on the '/hello' path.

- Most of the things are the same as in the previous example.
- The set() function is used to set the HTTP header's content type as HTML. When the browser receives this response it will be interpreted as HTML instead of plain text.
- Also in this example, we are not explicitly setting status, it is now concatenated with the statement of sending the response. This is another way to send status along with a response.

**Step 5** : Now we will see how to send data to the server.
Sometimes we have to send our data to the server for processing, for example when you try to log in on Facebook you send a password and email to the server

---
### a. Write a program to define a route, Handling Routes, Route Parameters, Query Parameters and URL building.

Program:
```js
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
```
**Output** :
1. Visiting http://localhost:3000/→ Welcome to ExpressJS Routing Lab!
2. Visiting http://localhost:3000/user/101→ User ID is: 101
3. Visiting http://localhost:3000/search?term=express→ Search Term: express
4. Visiting http://localhost:3000/product/electronics/500→ Category:electronics, Product ID: 500

**Viva Questions** :
1. How do you define a route in ExpressJS?
2. What is the difference between route parameters and query parameters?
3. How can you access query parameters in ExpressJS?
4. What is the purpose of reqand resobjects?
5. How do you start an Express server and listen on a port?

### b. Write a program to accept data, retrieve data and delete a specified resource using http methods.

Program:
```js
const express = require('express');

const bodyParser = require('body-parser'); const app = express();
const port = 3000;

// Middleware to parse JSON request bodies 
app.use(bodyParser.json());

// In-memory data storage (temporary for demo) 
let users = [];

// POST: Accept data (create new user) 
app.post('/users', (req, res) => {
	const { id, name, email } = req.body; if (!id || !name || !email) {
		return res.status(400).json({ error: 'All fields (id, name, email) are required' }); 
	}
	
	// Check if user with same ID exists 
	if (users.find(user => user.id === id)) {
		return res.status(409).json({ error: 'User with this ID already exists' }); 
	}
	
	users.push({ id, name, email });	
	res.status(201).json({ message: 'User added successfully' }); 
});

// GET: Retrieve all users 
app.get('/users', (req, res) => { 
	res.status(200).json(users); 
});

// DELETE: Remove a specific user by ID 
app.delete('/users/:id', (req, res) => { 
	const id = req.params.id;
	const index = users.findIndex(user => user.id === id); 
	if (index === -1) {
		return res.status(404).json({ error: 'User not found' }); 
	}

	const deletedUser = users.splice(index, 1);
	res.status(200).json({ message: `User ${deletedUser[0].name} deleted successfully` }); 
});

// Start the server 
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`); 
});
```

**Expected Output** :
- GET /users→ returns list of users
- POST /users→ adds new user
- DELETE /users/1→ deletes user with ID 1

**Viva Questions** :
1. What are the main HTTP methods used in ExpressJS?
2. How do you handle POST data in ExpressJS?
3. What is the difference between req.bodyand req.params?
4. How can you send JSON responses in ExpressJS?
5. Why is body-parserused in ExpressJS?

### c. Write a program to show the working of middleware.

Program :
```js
// index.js

const express = require('express'); 

const app = express();
const port = 3000;

// Custom middleware function for logging requests
const requestLogger = (req, res, next) => {
	const timestamp = new Date().toISOString(); 
	console.log(`${timestamp} - ${req.method} ${req.url}`); 
	next(); // Pass control to the next middleware or route handler 
};

// Custom middleware for authentication 
const authenticateUser = (req, res, next) => {

// In a real app, this would involve checking tokens or sessions. 
	const authToken = req.headers.authorization;

	if (authToken === 'valid-token') {
		// User is authenticated, proceed to the next middleware or route handler. 
		next(); 
	} 
	else {
		// User is not authorized, end the request-response cycle. 
		res.status(401).send('Unauthorized');
	}
}

// Apply application-level middleware (runs for all requests) app.use(requestLogger); 
// Use authentication middleware for a specific route 
app.get('/secure-route', authenticateUser, (req, res) => {
	res.send('Welcome to the secure area!'); 
});

// Route handler without specific middleware 
app.get('/', (req, res) => {
	res.send('Hello from the main page!'); 
});

// Start the server 
app.listen(port, () => {
	console.log(`Server is running on port ${port}`); 
});
```

**Expected Output** :
Console logs request URL and method whenever a route is accessed. 
Visiting / → Home Page
Visiting /secure-route →User Authentication page

**Viva Questions** :
1. What is middleware in ExpressJS?
2. How do you create custom middleware?
3. What is the purpose of the next()function?
4. Can middleware modify reqor resobjects?
5. Name some built-in middleware in ExpressJS
