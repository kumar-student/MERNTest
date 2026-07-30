# ReactJS - Props and States, Styles, Respond to Events
### **a. Write a Program to Work with Props and States**

**Aim**:

To understand the use of **props** for passing data between components and **state** for managing dynamic data in React functional components using the `useState` Hook.

**Requirements**:

- React 16.8 or later (Hooks support)
- Node.js and npm installed
- Visual Studio Code (or any code editor)
- _(Optional)_ Tailwind CSS for the styling used in this program

**Procedure (Step-by-Step)**:

1. Create a new React project using **Create React App** or **Vite**.
2. Install and configure Tailwind CSS.
3. Open the project in Visual Studio Code.
4. Open the file **`src/App.js`**.
5. Import the `useState` Hook from React.
6. Create a child component named `CounterDisplay` to receive data through props.
7. Create a parent component named `CounterApp` to manage the counter using state.
8. Pass the state value (`count`) from the parent component to the child component using props.
9. Add **Increment (+)** and **Decrement (−)** buttons to update the state.
10. Save the file.
11. Run the application using:
```shell
npm run dev
```
11. Observe the output in the browser.

**Tailwind CSS Configuration (Optional)**:

Install the Vite plugin:

```shell
npm install -D tailwindcss @tailwindcss/vite
```

Update **vite.config.js**: import and add the plugin to Vite configuration

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(), // Add this line
	],
})   
```

Update **src/index.css**

```css
@import "tailwindcss";   
```

Run the server if not running

```shell
npm run dev
```

**Program**:

**src/App.js**

```jsx
import React, { useState } from "react";

// Child Component using Props
function CounterDisplay({ count }) {
	return (
		<div className="p-4 bg-gray-100 rounded-2xl shadow-md text-center">
		  <h2 className="text-xl font-semibold">Current Count:</h2>
		  <p className="text-3xl font-bold text-blue-600">{count}</p>
		</div>
	);
}

// Parent Component using State
function App() {
	// State Hook
	const [count, setCount] = useState(0);
	
	// Event Handlers
	const increment = () => setCount((prev) => prev + 1);
	const decrement = () => setCount((prev) => prev - 1);
	
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
			<h1 className="text-2xl font-bold mb-6">
				React Props & State Example
			</h1>
			{/* Passing State as Props */}
			<CounterDisplay count={count} />
			<div className="flex gap-4 mt-6">
				<button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600">		
				  -
				</button>
			
				<button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-600">
				  +
				</button>
			</div>
		</div>
	);
}

export default App;
```

**How This Works**:

CounterApp (Parent Component)

- Uses the `useState` Hook to create and manage the `count` state.
- Contains the `increment` and `decrement` functions to update the counter.
- Passes the `count` value to the child component as a prop.

**CounterDisplay (Child Component)**

- Receives the `count` value as a prop from the parent component.
- Displays the current count.
- Does not modify the prop, making it a read-only value.

**Working**

- Initially, the counter value is **0**.
- Clicking the **+** button increases the counter by **1**.
- Clicking the **−** button decreases the counter by **1**.
- Whenever the state changes, React automatically re-renders both the parent and child components, displaying the updated count.

**Expected Output**

- Displays the heading:
```html
React Props & State Example
```

- Shows:
```
Current Count:
0
```

- Clicking the **+** button increments the counter.
- Clicking the **−** button decrements the counter.
- The updated count is immediately displayed in the child component.

**Viva Questions**:

1. What are props in ReactJS?
2. What is the difference between props and state?
3. How do you update state in functional components?
4. Can a child component modify the props received from the parent?
5. Which Hook is used to manage state in functional components?
6. Why are props considered read-only?
7. What happens when a component's state changes?
8. Why is the `useState` Hook used in React?

### b. Write a program to add styles (CSS and Sass Styling) and display data

**Aim**:

To apply CSS and Sass (SCSS) styling to React components and display dynamic data using props and arrays.

**Learning Outcomes**:

After completing this experiment, students will be able to:

- Create reusable React components.
- Pass data to components using props.
- Display dynamic data using arrays and the `map()` function.
- Apply CSS or Sass (SCSS) styling to React components.
- Understand the advantages of Sass over CSS.

**Procedure (Step-by-step)**:

- Create a new React project using Vite.
- Install the project dependencies.
- Install the Sass package (required only when using SCSS).
- Create a reusable React component.
- Store the required data in an array of objects.
- Render the data dynamically using the `map()` function.
- Apply styles using either CSS or Sass (SCSS).
- Run the application and observe the output.

**Project Structure**:

```text
student-app/ 
│── src/ 
│ ├── components/ 
│ │ └── StudentCard.jsx 
│ ├── App.jsx 
│ ├── App.scss (or App.css) 
│ ├── main.jsx 
│ └── index.css 
│ ├── package.json 
└── vite.config.js
```

**Program**:

**components/StudentCard.jsx**

```jsx
function StudentCard({name, age, course}) {
	return (
		<div className="student-card">
			<h2>{name}</h2>
			<p><strong>Age: </strong> {age}</p>
			<p><strong>Course: </strong> {course}</p>
		</div>
	);
}

export default StudentCard;
```

**App.jsx**

```jsx
import StudentCard from "./components/StudentCard";
import "./App.scss";    // Use "./App.css" if using CSS

function App() { 
	const students = [
		{ id: 1, name: "Rahul", age: 20, course: "Computer Science" },
		{ id: 2, name: "Priya", age: 21, course: "Electronics" },
		{ id: 3, name: "Arjun", age: 22, course: "Mechanical" },
	];

	return (
		<div className="app-container">
			<h1 className="title">Student Information</h1>
			<div className="student-list">
			{ 
				students.map((s, index) => (
					<StudentCard key={"Student-"+index+s.id} name={s.name} age={s.age} course={s.course}/>
				));
			}
			</div>
		</div>
	);
}

export default App;
```

**App.scss**

```scss
$app-bg: #f7f9fc; 
$card-bg: #ffffff; 
$primary-color: #0077cc; 
$shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 

.app-container { 
	text-align: center; 
	padding: 20px; 
	background: $app-bg; 
	min-height: 100vh; 
} 

.title { 
	color: #333; 
	margin-bottom: 20px; 
} 

.student-list { 
	display: flex; 
	justify-content: center; 
	gap: 20px; 
	flex-wrap: wrap; 
} 

.student-card { 
	width: 220px; 
	padding: 16px; 
	background: $card-bg; 
	border-radius: 12px; 
	box-shadow: $shadow; 
	transition: transform 0.3s ease, box-shadow 0.3s ease; 
	h2 { 
		color: $primary-color; 
		margin-bottom: 10px; 
	} 
	p { 
		margin: 6px 0; 
		color: #444; 
	} 
	&:hover { 
		transform: translateY(-5px); 
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); 
	} 
}
```

>Note: If you prefer regular CSS instead of SCSS, rename `App.scss` to `App.css`, replace the SASS variables with CSS values, and update the import statement in `App.jsx`

**How to Run**

Create a React app:

```shell
npm create vite@latest exp11b -- --template react
```

Move to the project folder

```shell
cd exp11b
```

Install dependencies

```shell
npm install
```

Install Sass (Only if using SCSS)

```shell
npm install sass
```

Replace the contents of

- **src/App.jsx**
- **src/components/StudentCard.jsx**
- **src/App.scss** (or src/**App.css**)

with the code given above.

Run the app:

```shell
npm run dev
```

Open the URL http://localhost:5173 in your web browser.

**Expected Output**:

The browser displays a page titled "Student Information" with following student details
- Name
- Age
- Course

**Viva Questions**:

1. What is the purpose of props in React?
2. How do you render a list of components using the `map()` function?
3. What is the purpose of the `key` prop in React?
4. How do you apply CSS styles to a React component?
5. What are the advantages of Sass (SCSS) over CSS?
6. What is the difference between CSS and SCSS files?
7. Why is Vite commonly used for creating modern React applications?
8. Can multiple CSS or SCSS files be imported into a React project?

**Result**:

The React application was successfully developed to display dynamic student information using reusable components and props. CSS or Sass (SCSS) styling was applied to enhance the appearance of the application, and the student data was rendered dynamically using the `map()` function.

### **c. Respond to User Events in React**

**Aim**

To handle user events such as button clicks, mouse events, and input changes in a React application using event handlers and state.

**Learning Outcomes**

After completing this experiment, students will be able to:

- Handle user events in React using event handlers.
- Update component state using the `useState` Hook.
- Use common React event attributes such as `onClick`, `onMouseOver`, `onMouseOut`, and `onChange`.
- Display dynamic content based on user interactions.
- Apply CSS or Sass (SCSS) styling to React components.

**Procedure**:

1. Create a new React project using Vite.
2. Install the project dependencies.
3. Install the Sass package (optional, if using SCSS).
4. Create a React component named `App.jsx`.
5. Use the `useState` Hook to store and update a message.
6. Create event handler functions for button click, mouse hover, mouse leave, and input change events.
7. Associate the event handlers with JSX elements using React event attributes.
8. Apply styling using CSS or Sass (SCSS).
9. Run the application and observe the output.

**Program**:

**App.jsx**

```jsx
import { useState } from "react"; 
import "./App.scss"; // Use "./App.css" if using CSS

function App() { 
	const [message, setMessage] = useState( "Click the button or type in the text box." ); 
	
	const handleClick = () => { 
		setMessage("Button Clicked!"); 
	}; 
	
	const handleMouseOver = () => { 
		setMessage("Mouse is over the button."); 
	}; 
	
	const handleMouseOut = () => { 
		setMessage("Mouse left the button."); 
	}; 
	
	const handleInputChange = (event) => { 
		setMessage(`You typed: ${event.target.value}`); 
	}; 
	
	return ( 
		<div className="app-container"> 
			<h1>React Event Handling</h1> 
			<p className="message">{message}</p> 
			<button 
				onClick={handleClick} 
				onMouseOver={handleMouseOver} 
				onMouseOut={handleMouseOut} 
		> 	
				Hover or Click Me 
			</button> 
			<input 
				type="text" 
				placeholder="Type something..." 
				onChange={handleInputChange} 
			/> 
		</div> 
	); 
} 

export default App;
```

**App.scss**

```scss
$app-bg: #f7f9fc; 
$primary-color: #2e7d32; 

.app-container { 
	text-align: center; 
	padding: 40px; 
	background: $app-bg; 
	min-height: 100vh; 
} 

.message { 
	font-size: 20px; 
	color: #1565c0; 
	margin: 20px 0; 
} 

button { 
	background: $primary-color; 
	color: white; 
	border: none; 
	border-radius: 8px; 
	padding: 10px 20px; 
	cursor: pointer; 
	margin-right: 15px; 
	transition: background 0.3s ease; 
	&:hover { 
		background: #1b5e20; 
	} 
} 
input { 
	padding: 10px; 
	border: 1px solid #cccccc; 
	border-radius: 6px; 
}
```

>**Note:** If using regular CSS, rename `App.scss` to `App.css`, replace the Sass variables with CSS values, and update the import statement in `App.jsx`.

**How to Run**

Create a React project

```shell
npm create vite@latest exp11c -- --template react
```

Navigate to the project directory

```shell
cd exp11c
```

Install dependencies

```shell
npm install
```

Install SASS (Optional)

```shell
npm install sass
```

Replace the content of

- `src/App.jsx`
- `src/App.scss` (or `src/App.css`)

with the code given above

Run the application

```shell
npm run dev
```

Open the URL http://localhost:5173 in your browser

**How it works**:

- **Button Click (**`**onClick**`**)** updates the message to **"Button Clicked!"**.
- **Mouse Over (**`**onMouseOver**`**)** displays **"Mouse is over the button."**.
- **Mouse Leave (**`**onMouseOut**`**)** displays **"Mouse left the button."**.
- **Input Change (**`**onChange**`**)** displays the text entered by the user in real time.
- The `**useState**` **Hook** updates the displayed message whenever an event occurs.

**Expected Output**:

When the application starts, the browser displays the message:

> **"Click the button or type in the text box."**

- Clicking the button changes the message to **"Button Clicked!"**.
- Moving the mouse over the button changes the message to **"Mouse is over the button."**.
- Moving the mouse away from the button changes the message to **"Mouse left the button."**.
- Typing in the text box displays **"You typed: `<entered text>`"**.

**Viva Questions**

1. What is event handling in React?
2. How are events handled in React components?
3. What is the purpose of the `useState` Hook?
4. What is the difference between HTML event handling and React event handling?
5. What are `onClick`, `onChange`, `onMouseOver`, and `onMouseOut` events?
6. How can you pass arguments to an event handler in React?
7. What is a synthetic event in React?
8. What is the purpose of `event.preventDefault()` in React?

**Result**:

The React application was successfully developed to respond to user events such as button clicks, mouse interactions, and text input. The application dynamically updated the displayed message using the `useState` Hook and React event handlers.

