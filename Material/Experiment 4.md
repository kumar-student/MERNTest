# ExpressJS - Database, RESTful APIs
### a. Write a program to connect MongoDB database using Mongoose and perform CRUD operations.

**Aim**:
To understand how to connect MongoDB with ExpressJS using Mongoose and pefrom CRUD (Create, Read, Update, Delete) operations.

**Softwares/Tools required**:
- VS Code (recommended) or any other editor
- NodeJS
- ExpressJS
- MongoDB Atlas or local MongoDB
- Mongoose (npm module)

**Procedure (Step-by-Step)**:
Create a new folder express-mongo-lab and open in VS Code.

Initialize NodeJS project
```js
npm init -y
npm install express mongoose body-parser
```

Create `app.js` file
Connect to MongoDB Atlas or local MongoDB
Define a Mongoose schema and model for a collection
Create routes for CRUD operations (GET, POST, PUT, DELETE)

Run the program:
```shell
node app.js
```

Test API routes using Postman or browser.

Program:
```js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
// Connect to MongoDB (Change DB name if you like) 
mongoose.connect("mongodb://127.0.0.1:27017/mydb", {
	useNewUrlParser: True, 
	useUnifiedTopology: True
}).then(() => {
	console.log("Connected to MongoDB");
}).catch((err) => {
	const userSchema = new mongoose.Schema({
		name: String,
		email: String,
		age: Number
	});
});

// Create Model
const User = mongoose.model("User", userSchema);

// CRUD Routes

// Create (Insert a new user)
app.post("/users", async(req, res) => {
	try {
		const user = new User(req.body);
		await user.save();
		rest.status(201).send(user);
	}
	catch(err) {
		res.status(400).send(err);
	}
});

// Read (Get all users)
app.get("/users", async(req, res) => {
	try {
		const users = await User.find();
		res.send(users);
	}
	catch(err) {
		res.status(500).send(err);
	}
});

// Read (Get a single user by id)
app.get("/users/:id", async(req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if(!user)
			return res.status(404).send("User not found");
		res.send(user);
	}
	catch(err) {
		res.status(500).send(err);
	}
});

// Update (Update a user by id)
app.put("/users/:id", async(req, res) => {
	try {
		const user = await User.findByIdAndUpdate(
			req.params.id, req.body, {new: True}
		);
		if(!user)
			return res.status(404).send("User not found");
		res.send(user);
	}
	catch(err) {
		res.status(400).send(err);
	}
});

// Delete (Remove a user by id)
app.delete("/users/:id", async(req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if(!user)
			return res.status(404).send("User not found");
		res.send({message: "User deleted successfully"});
	}
	catch(err) {
		res.status(500).send(err);
	}
});

// Start server
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
```

**Expected output**:
POST /users -> Adds new user to MongoDB
GET /users -> Returns all users in JSON
PUT /users/:id -> Updates user by Id
Delete /users/:id -> Delete user by Id

**Viva Questions**:
1. What is Mongoose and why is it used in NodeJS?
2. How do you define a schema in Mongoose?
3. What are the main CRUD operations in RESTful API
4. How do you connect ExpressJS to MongoDB Atlas?
5. What is the difference between find and findById in Mongooes?
### b. Write a program to develop a single page application using RESTful APIs.

**Aim**:
To create a simple single-page application (SPA) that interacts with ExpressJS RESTful APIs.

**Software/Tools required**:
- VS Code or any code editor
- NodeJS
- ExpressJS
- MongoDB + Mongoose
- HTML, CSS, JavaScript (frontend)

**Procedure**:
Create **spa-lab** folder.

Initialize NodeJS project:
```shell
npm init -y
npm install express mongoose body-parser cors
```

Create backend `server.js` with RESTful APIs.

Create **index.html** in public folder to interact with APIs using fetch.

Serve statis frontend files with Express.

Run server:
```shell
node server.js
```

Open `index.html` in browser and test adding, fetching, updating, deleting records.

Program:

server.js (backend)
```js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
cont PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory users (instead of DB for simplicity)
let users = [];
let idCounter = 1;

// Create
app.post("/api/users", (req, res) => { 
	const user = { id: idCounter++, ...req.body }; 
	users.push(user); 
	res.status(201).json(user); 
});

// Read All
app.get("/api/users", (req, res) => {
	res.json(users);
});

// Read One
app.get("/api/users/:id", (req, res) => {
	const user = users.find((u) => u.id == req.params.id);
	if (!user) 
		return res.status(404).json({ message: "User not found" }); 
	res.json(user);
});

// Update
app.put("/api/users/:id", (req, res) => { 
	const user = users.find((u) => u.id == req.params.id); 
	if (!user) 
		return res.status(404).json({ message: "User not found" }); 
	user.name = req.body.name || user.name; 
	user.email = req.body.email || user.email; 
	res.json(user); 
});

// Delete
app.delete("/api/users/:id", (req, res) => { 
	users = users.filter((u) => u.id != req.params.id); 
	res.json({ message: "User deleted successfully" }); 
});

// Start server
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
```

index.html (front-end)
```js
const express = require("express"); 
const bodyParser = require("body-parser"); 
const cors = require("cors"); 

const app = express(); 
const PORT = 3000;

// Middleware 
app.use(cors()); 
app.use(bodyParser.json()); 

// In-memory users (instead of DB for simplicity) 
let users = [];
let idCounter = 1;

// Create
app.post("/api/users", (req, res) => { 
	const user = { id: idCounter++, ...req.body }; 
	users.push(user); 
	res.status(201).json(user); 
}); 

// Read All
app.get("/api/users", (req, res) => { res.json(users); }); 

// Read One 
app.get("/api/users/:id", (req, res) => { 
	const user = users.find((u) => u.id == req.params.id); 
	if (!user) 
		return res.status(404).json({ message: "User not found" }); 
	res.json(user); 
}); 

// Update 
app.put("/api/users/:id", (req, res) => { 
	const user = users.find((u) => u.id == req.params.id); 
	if (!user) 
		return res.status(404).json({ message: "User not found" });
	user.name = req.body.name || user.name; 
	user.email = req.body.email || user.email; 
	res.json(user); 
}); 

// Delete 
app.delete("/api/users/:id", (req, res) => { 
	users = users.filter((u) => u.id != req.params.id); 
	res.json({ message: "User deleted successfully" }); 
}); 

// Start server 
app.listen(PORT, () => { 
	console.log(`🚀Server running at http://localhost:${PORT}`); 
});
```

To Execute above application Install dependencies: 
```shell
npm install express body-parser cors
``` 

Start backend: 
```shell
node server.js
```

Open index.html in browser

You can now Add, View, Edit, and Delete users dynamically (SPA behavior - no page reload).

**Expected Output**:
A single-page frontend allows creating, viewing, updating, and deleting tasks by interacting with REST APIs.

**Viva Questions**:
1. What is a single-page application (SPA)?
2. How do frontend and backend communicate in a SPA?
3. Why is CORS required in ExpressJS for frontend-backend communication?
4. What are RESTful API methods and their purposes?
5. How can SPA improve user experience compared to multi-page apps?
