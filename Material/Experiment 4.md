# ExpressJS - Database, RESTful APIs
### a. Write a program to connect MongoDB database using Mongoose and perform CRUD operations.

**Aim**:
To develop an ExpressJS application that connects to a MongoDB database using Mongoose and performs CRUD (Create, Read, Update, and Delete) operations through RESTful APIs.

**Learning Outcomes**:
After completing this experiment, students will be able to:
- Connect an ExpressJS application to MongoDB using Mongoose.
- Create a Mongoose schema and model.
- Implement RESTful APIs for CRUD operations.
- Test APIs using Postman or Thunder Client.
- Store and retrieve data from MongoDB.

**Software/Tools Required**:
- Visual Studio Code (or any code editor)
- Node.js
- ExpressJS
- MongoDB Community Server or MongoDB Atlas
- Mongoose
- Postman or Thunder Client (VS Code Extension)

**Prerequisites**:
Students should have:
- Basic knowledge of JavaScript
- Basic understanding of ExpressJS
- MongoDB installed and running locally (or a MongoDB Atlas account)

**Project Structure**:
```text
express-mongo-lab/
│
├── app.js
├── package.json
└── node_modules/
```

**Procedure (Step-by-Step)**:

**Step 1**: Create a new folder named **express-mongo-lab** and open it in Visual Studio Code.


**Step 2**: Initialize NodeJS project
```shell
npm init -y
```

**Step 3**: Install required packages

Install ExpressJS and Mongoose
```shell
npm install express mongoose
```

**Step 4**: Create the Application File
Create `app.js` file

**Step 5**: Connect to MongoDB
Use Mongoose to connect to the local MongoDB server.
```shell
mongodb://127.0.0.1:27017
```

> The database **mydb** is created automatically when the first document is inserted

**Step 6**: Create a Schema and Model
Define a schema for the **User** collection with the following fields
- name
- email
- age

Create a Mongoose model named **User**.

**Step 7**: Implement RESTful APIs

Create the following CRUD endpoints

| HTTP Method | Endpoint     | Description           |
| ----------- | ------------ | --------------------- |
| POST        | `/users`     | Create a new user     |
| GET         | `/users`     | Retrieve all users    |
| GET         | `/users/:id` | Retrieve a user by ID |
| PUT         | `/users/:id` | Update a user         |
| DELETE      | `/users/:id` | Delete a user         |

**Step 8**: Execute the Application

Run the server:
```shell
node app.js
```

If the connection is successful, the terminal displays:
```text
Connected to MongoDB
Server running at http://localhost:3000
```

**Step 9**: Test the APIs
Use **Postman** or the **Thunder Client** extension to test each endpoint.

**Create User**

Method
```text
post
```

URL
```text
http://localhost:3000/users
```

Request Body(JSON)
```json
{
	"name": "Rahul",
	"email": "rahul@example.com",
	"age": 21
}
```

**Retrieve All Users**

Method
```text
GET
```

URL
```text
http://localhost:3000/users
```

**Retrieve a User by ID**

Method
```text
GET
```

URL
```text
http://localhost:3000/users/<user_id>
```

Replace `<user_id>` with the MongoDB ObjectId returned while creating the user.

Update a User

Method
```text
PUT
```

URL
```text
http://localhost:3000/users/<user_id>
```

Request Body
```json
{
	"name": "Rahul Kumar",
	"email": "rahul@example.com",
	"age": 22
}
```

**Delete a User**

Method
```text
DELETE
```

URL
```text
http://localhost:3000/users/<user_id>
```
---
**Program**:

**app.js**
```js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
// Connect to MongoDB (Change DB name if you like) 
mongoose.connect("mongodb://127.0.0.1:27017/mydb", {
	useNewUrlParser: true, 
	useUnifiedTopology: true
}).then(() => {
	console.log("Connected to MongoDB");
}).catch((err) => {
	console.log(err);
});

// User schema
const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	age: Number
});

// Create Model
const User = mongoose.model("User", userSchema);

// CRUD Routes

// Create (Insert a new user)
app.post("/users", async(req, res) => {
	try {
		const user = new User(req.body);
		await user.save();
		res.status(201).send(user);
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
			req.params.id, req.body, {new: true}
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

API Routes

| Method | URL        | Purpose       |
| ------ | ---------- | ------------- |
| POST   | /users     | Add user      |
| GET    | /users     | Get all users |
| GET    | /users/:id | Get user      |
| PUT    | /users/:id | Update user   |
| DELETE | /users/:id | Delete user   |

**Expected Output**:
The application should:
- Successfully connect to the MongoDB database.
- Create new user records.
- Retrieve all users stored in the database.
- Retrieve a specific user using its ObjectId.
- Update existing user information.
- Delete a user from the database.
- Return responses in JSON format.

>Place screenshots of the application output and API responses here

**Viva Questions**:
1. What is Mongoose and why is it used in NodeJS?
2. How do you define a schema in Mongoose?
3. What are the main CRUD operations in RESTful API
4. How do you connect ExpressJS to MongoDB Atlas?
5. What is the purpose of `express.json()` middleware?
6. What is the difference between `find()` and `findById()`?
7. What is the role of asynchronous programming (`async/await`) in database operations?
8. Why is MongoDB called a NoSQL database?
### b. Write a program to develop a single page application using RESTful APIs.

**Aim**:
To develop a simple Single-Page Application (SPA) using HTML, CSS, and JavaScript that interacts with RESTful APIs built using ExpressJS.

**Learning Outcomes**:
After completing this experiment, students will be able to:
- Develop a Single-Page Application (SPA).
- Consume RESTful APIs using the Fetch API.
- Perform CRUD operations from a web interface.
- Understand communication between frontend and backend using JSON.
- Serve static web pages using ExpressJS.

**Software/Tools required**:
- VS Code or any code editor
- NodeJS
- ExpressJS
- HTML, CSS, JavaScript (frontend)

**Folder Structure**:
```text
spa-lab/
│
├── server.js
├── package.json
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
```

**Procedure**:
**Step 1**: Create **spa-lab** folder.
```shell
mkdir spa-lab
cd spa-lab
```

**Step 2**: Initialize NodeJS project:
```shell
npm init -y
```

**Step 3**: Install Dependencies
```shell
npm install express cors
```

**Step 4**: Create backend 
Create `server.js` with RESTful APIs.
The server should
- Create REST APIs
- Store users in an in-memory array
- Serve frontend files from the **public** folder

**Step 5**: Create Frontend
Inside the public folder create
- index.html
- style.css
- script.js

The frontend should allow users to
- Add a user
- Display all users
- Edit a user
- Delete a user
Without reloading the page

**Step 6**: Serve Static Files
Add the following middleware in **server.js** to serve statis frontend files with Express.

**server.js**
```js
app.use(express.static("public"));
```

**Step 7**: Run the application:
```shell
node server.js
```

**Step 8**: Open the application
Open the browser and visit. http://localhost:3000

**Endpoints**

| Method | URL            | Description |
| ------ | -------------- | ----------- |
| POST   | /api/users     | Create      |
| GET    | /api/users     | Read        |
| GET    | /api/users/:id | Read One    |
| PUT    | /api/users/:id | Update      |
| DELETE | /api/users/:id | Delete      |

---

**Program**:

**server.js** (backend)
```js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// In-memory users (instead of DB for simplicity)
let users = [];
let idCounter = 1;

// Create
app.post("/api/users", (req, res) => {
	if(name.trim()==="" || email.trim()===""){ 
		alert("Please enter Name and Email"); 
		return; 
	}
	
	// const user = { id: idCounter++, ...req.body };
	const user = { 
		id: idCounter++,
		name: req.body.name,
		email: req.body.email
	}; 
	
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
		return res.status(404).json({ 
			message: "User not found" 
		});

	res.json(user);
});

// Update
app.put("/api/users/:id", (req, res) => { 
	const user = users.find((u) => u.id == req.params.id); 
	if (!user) 
		return res.status(404).json({ 
			message: "User not found" 
		}); 

	user.name = req.body.name || user.name; 
	user.email = req.body.email || user.email; 
	res.json(user); 
});

// Delete
app.delete("/api/users/:id", (req, res) => { 
	const index = users.findIndex(u => u.id == req.params.id);
	
	if(index === -1){
	    return res.status(404).json({
	        message:"User not found"
	    });
	}
	
	users.splice(index,1);
	
	res.json({
	    message:"User deleted successfully"
	});
});

// Start server
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
```

**script.js**
```js
const API = "/users";

let editingId = null;

async function loadUsers() {
	const response = await fetch(API);
	const users = await response.json();

	const tbody = document.querySelector("tbody");
	tbody.innerHTML = "";
	
	users.forEach(user => {
		tbody.innerHTML += `
			<tr>
				<td>${user.id}</td>
				<td>${user.name}</td>
				<td>${user.email}</td>
				<td> 
					<button onclick="editUser(${user.id})"> Edit </button> 
					<button onclick="deleteUser(${user.id})"> Delete </button> 
				</td>
			</tr>
		`;
	});
}

async function saveUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const data = {
        name,
        email
    };

    if(editingId === null){
        await fetch(API,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
    }
    else{
        await fetch(`${API}/${editingId}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });

        editingId = null;
        document.getElementById("saveBtn").innerText =
            "Add User";
    }

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    
    document.getElementById("name").focus();
    await loadUsers();
}

async function editUser(id){
    const response = await fetch(`${API}/${id}`);

    const user = await response.json();

    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;

    editingId = id;
    document.getElementById("saveBtn").innerText = "Update User";
}

async function deleteUser(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    // If the deleted user was being edited,
    // return the application to Add mode.
    if (editingId === id) {
        editingId = null;

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";

        document.getElementById("saveBtn").innerText = "Add User";
    }
    await loadUsers();
}

loadUsers();
```

**style.css**
```css
body{
    font-family: Arial;
    margin:40px;
}

input{
    padding:8px;
    margin:5px;
}

button{
    padding:8px 12px;
    cursor: pointer;
}

table{
    border-collapse:collapse;
    margin-top:20px;
    width:60%;
}

th,td{
    padding:10px;
}
```

**index.html**
```html
<!DOCTYPE html>
<html>
	<head>
	    <title>User Management SPA</title>
	    <link rel="stylesheet" href="style.css">
	</head>
	<body>
		<h2>User Management</h2>		
		<input type="text" id="name" placeholder="Enter Name">
		<input type="email" id="email" placeholder="Enter Email">		
		<button id="saveBtn" onclick="saveUser()"> Add User </button>
		<hr>		
		<table border="1" id="userTable">
		    <thead>
		        <tr>
		            <th>ID</th>
		            <th>Name</th>
		            <th>Email</th>
		            <th>Action</th>
		        </tr>
		    </thead>
		    <tbody></tbody>
		</table>
		<script src="script.js"></script>
	</body>
</html>
```

**Execution**
Open the browser and visit http://localhost:3000

**Expected Output**:
A single-page frontend allows creating, viewing, updating, and deleting tasks by interacting with REST APIs.

**Viva Questions**:
1. What is a single-page application (SPA)?
2. How do frontend and backend communicate in a SPA?
3. Why is CORS required in ExpressJS for frontend-backend communication?
4. What are RESTful API methods and their purposes?
5. How can SPA improve user experience compared to multi-page apps?

### C. Develop a Single-Page Application (SPA) using ExpressJS RESTful APIs and MongoDB

**Aim**
To develop a Single-Page Application (SPA) using HTML, CSS and JavaScript that interacts with ExpressJS RESTful APIs backed by MongoDB using Mongoose.

**Learning Outcomes**
After completing this experiment, students will be able to:
- Develop a Single-Page Application using HTML, CSS and JavaScript
- Consume RESTful APIs using the Fetch API
- Perform CRUD operations on MongoDB through ExpressJS
- Update webpage content dynamically without refreshing the page
- Integrate frontend and backend components into a complete web application

**Software/Tools Required**
- Visual Studio Code
- Node.js
- ExpressJS
- MongoDB (Local or Atlas)
- Mongoose
- Modern Web Browser

**Folder Structure**:
```text
express-mongo-spa/
│
├── app.js
├── package.json
│
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

**Procedure (Step-by-Step)**
**Step 1**: Copy the completed **express-mongo-lab** project's files into a new folder named **express-mongo-spa**.

**Step 2**: Copy the **public** folder from **spa-lab** into project **express-mongo-spa**

**Step 3**: Install dependencies
```shell
npm install
```

of if needed
```shell
npm install express mongoose cors
```

**Step 4**: Modify **app.js**
Add the middleware code to the app.js before defining the routes.

**app.js**
```js
// ...
app.use(express.static("public"));

// ...
```
This serves the frontend files.

**Step 7**: Run the application
```shell
node app.js
```

**Step 8**: Open http://localhost:3000

**Step 9**: Perform CRUD operations
Perform:
- Add user
- View users
- Edit user
- Delete user
Verify data in MongoDB

---

**Program**

**Backend**
Use the app.js developed in **express-mongo-lab**. No changes are required to the MongoDB connection, schema, model and CRUD API implementation.

Add only this middleware
```js
// Middleware 
app.use(express.json()); 
app.use(express.static("public"));
```