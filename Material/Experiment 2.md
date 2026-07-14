# Experiment: Using a Templating Engine (EJS) in ExpressJS

**Aim**:
To understand how to use a templating engine (EJS) in ExpressJS for dynamic HTML rendering.

**Software/Tools Required**:
- Visual Studio Code (VS Code)
- Node.js
- ExpressJS
- EJS

**Procedure**
**Step 1**: Create the Project
1. Create a new folder named **express-ejs-lab** and open it in VS Code.
2. Initialize a Node.js project by running the following commands:

```bash
npm init -y
npm install express ejs
```

3. Create the following project structure:

```text
your_express_app/
├── app.js
└── views/
```

**Step 2**: Configure ExpressJS

Create a file named **app.js** and add the following code:
```javascript
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

**Step 3**: Create the EJS Template

Inside the **views** folder, create a file named **index.ejs** and add the following code:
```html
<html>
<head>
    <title>EJS Demo</title>
</head>
<body>
    <h1>Welcome, <%= user.name %>!</h1>

    <p>
        You are enrolled in <b><%= user.course %></b> at
        <b><%= user.college %></b>.
    </p>
</body>
</html>
```

**Step 4**: Run the Application

Run the server using the following command:
```bash
node app.js
```

Open a web browser and visit:
```text
http://localhost:3000
```

**Output**:
The browser displays a webpage similar to the following:
```
Welcome, Student!

You are enrolled in Full Stack Development at PSCMR College.
```

**Viva Questions**:
1. What is a templating engine in ExpressJS?
2. How do you pass data from Express to an EJS template?
3. What is the difference between EJS and static HTML?
4. How can you include partial templates in EJS?
5. What are the advantages of using EJS in ExpressJS?

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
touch views/index.ejs
touch views/result.html
```

Install dependencies
```shell
npm install express ejs body-parser
```

**app.js**
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
	// const name = req.body.name;
	// const email = req.body.email;
	const { name, email } = req.body; 
	res.render('result', { name: name, email: email }); 
});

// Start server 
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`); 
});
```

**views/index.ejs**
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

**views/result.ejs**
```html
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