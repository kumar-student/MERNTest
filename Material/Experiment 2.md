## ExpressJS – Templating, Form Data

Write a program using templating engine.

**Aim** : 
To understand how to use a templating engine (EJS) in ExpressJS for dynamic HTML rendering.

**Software/Tools Required** :
VS Code 
Node.js 
ExpressJS
EJS (npm install ejs) 

**Procedure (Step-by-step)** :
**Step 1**: Create a new folder express-ejs-laband open in VS Code.

Initialize Node.js project :
```js
npm init -y
npm install express ejs
```

Create app.jsand a folder viewsfor EJS templates. 

**Step 2** : Create an EJS file index.ejsinside views.
Write the following code to render dynamic content.

Run the program :
```js
node app.js
```

Open a browser and visit http://localhost:3000.

**Program**:
Templating engine with Express.js (using EJS)

This program demonstrates using a templating engine (EJS) with Express.js to render dynamic HTML content on the server-side.

Project setup
```text
your_express_app/
├── app.js
└── views/
```

Install dependencies

In your project directory, open the terminal and run:
```shell
npm init -y
npm install express ejs
```

**Step 3**: Express.js code(`app.js`)

```js
const express = require('express'); 

const app = express();
const PORT = 3000;

// Set EJS as the templating engine 
app.set('view engine', 'ejs'); 

// Route
app.get('/', (req, res) => {
	const user = { 
		name: 'Student', 
		course: 'Full Stack Development', 
		college: 'PSCMR College' 
	}; 
	res.render('index', { user: user });
});

// Start server
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`); 
});

```

**Step 4** : Add Code to `views/index.ejs`
```html
<html> <head>
	<title>EJS Demo</title> </head>	
	<body>
		<h1>Welcome, <%= user.name %>!</h1>
		<p>
			You are enrolled in <b><%= user.course %></b> at <b><%= user.college %></b>.
		</p>
	</body>
</html>
```

**Step 5** : Run the Server
```shell
node app.js
```

Visit http://localhost:3000

>Place the output image here

**Viva Questions** :
1. What is a templating engine in ExpressJS?
2. How do you pass data from Express to an EJS template?
3. What is the difference between EJS and static HTML?
4. How can you include partial templates in EJS?
5. What are the advantages of using EJS in Express JS?

---
##### Example 1

Create project structure
```text
project/
├── app.js
├── package.json
└── views/
    ├── index.ejs
    └── result.ejs
```

Type in the terminal
```shell
mkdir project
cd project
touch app.js
mkdir views
cd views
touch views/index.ejs
touch views/result.ejs
```

app.js
```js
const express = require('express');

const bodyParser = require('body-parser'); 
const app = express();
const PORT = 3000;

// Set EJS as the templating engine 
app.set('view engine', 'ejs');

// Middleware to parse form data 
app.use(bodyParser.urlencoded({ extended: true }));

// Route to display form data
app.get('/', (req, res) => {
	res.render('index'); 
});

// Route to handle form submission 
app.post('/submit', (req, res) => { 
	const name = req.body.name; const email = req.body.email;
	res.render('result', { name: name, email: email }); 
});

// Start server 
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`); 
});
```

views/index.ejs
```html
<!DOCTYPE html> 
<html lang="en"> 
	<head>
		<meta charset="UTF-8"> <title>Form Data Example</title>
	</head> 
	<body>
		<h1>Submit Your Details</h1>
		<form action="/submit" method="POST"> 
			<label>Name:</label>		
			<input type="text" name="name" required><br><br> 
			<label>Email:</label>
			<input type="email" name="email" required><br><br> 
			<button type="submit">Submit</button>
		</form>
	</body> 
</html>
```

views/result.ejs
```js
<!DOCTYPE html> 
<html lang="en"> 
	<head>
	<meta charset="UTF-8"> <title>Result</title>
	</head> 
	<body>
		<h1>Form Submitted</h1> 
		<p><strong>Name:</strong> <%= name %></p> 
		<p><strong>Email:</strong> <%= email %></p> 
		<a href="/">Go Back</a>
	</body> 
</html>
```

Start the server(if not running) to run and test
```shell
node app.js
```

Visit http://localhost:3000

>Place the output images here
##### Example 2

Create project structure
```txt
project1/
├── app1.js
├── package.json
└── views/
    ├── index1.ejs
    └── result1.ejs
```

Type in the terminal
```shell
mkdir project1
cd project1
touch app1.js
mkdir views
cd views
touch views/index1.ejs
touch views/result1.ejs
```

app1.js
```js
const express = require('express'); 
const bodyParser = require('body-parser'); 

const app = express(); 
const PORT = 3000; 

// Set EJS as template engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })); 

// Show the form
app.get('/', (req, res) => { 
	res.render('index1'); 
});

// Process the form
app.post('/submit', (req, res) => { 
	const name = req.body.name; 
	const grade = req.body.grade; 
	
	// Set color based on grade 
	let color = "black"; 
	if (grade === 'A') 
		color = 'green'; 
	else if (grade === 'B') 
		color = 'blue'; 
	else 
		color = 'red'; 

	// Send values to result page 
	res.render('result1', { name: name, grade: grade, color: color });
}); 

// Start server 
app.listen(PORT, () => { 
	console.log(`Server running at http://localhost:${PORT}`); 
});    
```

index1.ejs
```html
<!DOCTYPE html>
<html> 
	<head> 
		<title>Student Form</title> 
	</head> 
	<body> 
		<h1>Enter Student Details</h1> 
		<form action="/submit" method="POST"> 
			<label>Name:</label> 
			<input type="text" name="name" required><br><br> 
			<label>Grade (A/B/C):</label> 
			<input type="text" name="grade" required><br><br> 
			<button type="submit">Submit</button> 
		</form> 
	</body> 
</html> 
```

views/result1.ejs
```html
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8"> <title>Result</title>
    </head>
    <body>
        <h1>Form Submitted</h1>
        <p><strong>Name:</strong> <%= name %></p>
        <p><strong>Grade:</strong> <%= grade %></p>
        <a href="/">Go Back</a>
    </body>
</html>
```

> Place the output image here

**Viva Questions** : 
1. How do you access form data in ExpressJS? 
2. What is the difference between GET and POST methods? 
3. Why is body-parser required in ExpressJS? 
4. How can you handle JSON data sent from the client? 
5. How do you validate form data in ExpressJS? 