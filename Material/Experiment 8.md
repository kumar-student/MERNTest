## ReactJS – React Router, Updating the Screen

**Aim**:
To understand how to navigate between different pages in a React application using React Router.

**Software / Tools Required**:
- Visual Studio Code
- Node.js (LTS version)
- React (using Vite)
- React Router DOM

**Theory**:
React Router is a library used for navigation in React applications. It enables users to move between different pages (components) without reloading the entire webpage, resulting in a faster and smoother user experience.

**Step-by-Step Procedure**:

**Step 1**: Install Node.js

Download and install the latest LTS version of Node.js.

Verify the installation by opening a terminal and running:

```bash
node -v
npm -v
```

Both commands should display version numbers.

**Step 2**: Create a New React Project Using Vite

Open the VS Code terminal and run:

```bash
npm create vite@latest react-router-lab -- --template react
```

**Step 3**: Open the Project

```bash
cd react-router-lab
```

**Step 4**: Install Dependencies

```bash
npm install
```

**Step 5**: Install React Router

```bash
npm install react-router-dom
```

**Step 6**: Start the Development Server

```bash
npm run dev
```

The terminal displays a local URL similar to:

```
http://localhost:5173
```

Open this URL in your browser.

**Project Structure**:

Create the following folder structure inside the **src** folder.

```
src
│
├── pages
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

**Program**:

**Home.jsx**
```jsx
function Home() {
	return <h2>Welcome to the Home Page</h2>;
}

export default Home;
```

**About.jsx**
```jsx
function About() {
	return <h2>About Us Page</h2>;
}

export default About;
```

**Contact.jsx**
```jsx
function Contact() {
	return <h2>Contact Page</h2>;
}

export default Contact;
```

**App.jsx**
```jsx
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
	return (
		<div style={{ textAlign: "center", marginTop: "30px" }}>
			<h1>React Router Example</h1>
			<nav>
				<Link to="/" style={{ margin: "0 15px" }}>
				  Home
				</Link>
				<Link to="/about" style={{ margin: "0 15px" }}>
				  About
				</Link>
				<Link to="/contact" style={{ margin: "0 15px" }}>
				  Contact
				</Link>
			</nav>
			<hr />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
```

**main.jsx**
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
```

**Route Mapping**:

| URL      | Component |
| -------- | --------- |
| /        | Home      |
| /about   | About     |
| /contact | Contact   |

**Expected Output**:

Initially:
```
React Router Example

Home   About   Contact

--------------------------------

Welcome to the Home Page
```

Selecting **About** displays:

```
About Us Page
```

Selecting **Contact** displays:

```
Contact Page
```

The browser URL changes, but the webpage is not reloaded.

**Result**:

The React application was successfully developed using Vite and React Router. Navigation between Home, About, and Contact pages was implemented without reloading the webpage.

**Viva Questions**:
1. What is React Router?
2. Why is React Router used?
3. What is BrowserRouter?
4. What is the difference between Link and the `<a>` tag?
5. What is the purpose of Routes?
6. What is the purpose of Route?
7. Can React Router support nested routes?
8. Which command is used to start a Vite project?
9. Why is Vite preferred over Create React App?
10. Which React Router components are used in this experiment?

---
### b. Updating the Screen Using React State

**Aim**:
To understand how React automatically updates the user interface when a component's state changes using the `useState` Hook.

**Software / Tools Required**:
- Visual Studio Code
- Node.js (LTS version)
- React (using Vite)
- Web browser (Chrome, Edge, or Firefox)

**Theory**:
React applications display information using components. Each component can store data in **state**. When the state changes, React automatically updates only the affected parts of the webpage instead of reloading the entire page. This process is called **re-rendering**.

The `useState` Hook is used in functional components to create and update state.

**Step-by-Step Procedure**:

**Step 1**: Install Node.js

Verify that Node.js and npm are installed.
```bash
node -v
npm -v
```

**Step 2**: Create a React Project

Open the VS Code terminal.

```bash
npm create vite@latest react-state-lab
```

Select:
- Framework: **React**
- Variant: **JavaScript**

**Step 3**: Open the Project

```bash
cd react-state-lab
```

**Step 4**: Install Dependencies

```bash
npm install
```

**Step 5**: Start the Development Server

```bash
npm run dev
```

Open the URL displayed in the terminal (usually `http://localhost:5173`).

**Step 6**: Replace the Contents of `src/App.jsx`

Delete the existing code and paste the following program.

**Program**:

**src/App.jsx**
```jsx
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");
	
	const increment = () => {
		setCount((previousCount) => previousCount + 1);
	};
	
	const decrement = () => {
		setCount((previousCount) => Math.max(0, previousCount - 1));
	};
	
	const resetCounter = () => {
		setCount(0);
	};
	
	return (
		<div
		  style={{
			textAlign: "center",
			marginTop: "40px",
			fontFamily: "Arial",
		  }}
		>
			<h1>React Screen Update Example</h1>
			<h2>Counter: {count}</h2>
			<button onClick={increment}>
				Increment
			</button>
			<button
				onClick={decrement}
				style={{ marginLeft: "10px" }}
			>
				Decrement
		  </button>
		
			<button
				onClick={resetCounter}
				style={{ marginLeft: "10px" }}
			>
				Reset
			</button>
			<hr />
			<h2>Enter Your Name</h2>
			<input
				type="text"
				placeholder="Type your name"
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
			<h3>
			{
				name
				? `Hello, ${name}!`
				: "Your greeting will appear here."
			}
			</h3>
		</div>
	);
}

export default App;
```

**How the Program Works**:

**Step 1**

The component creates two state variables.

```jsx
const [count, setCount] = useState(0);
const [name, setName] = useState("");
```

- `count` stores the counter value.
- `name` stores the text entered by the user.
   
**Step 2**

When the **Increment** button is clicked,

```jsx
setCount(previousCount => previousCount + 1);
```

updates the state.

React automatically re-renders the component.

The new counter value appears immediately.

**Step 3**

When the user types in the text box,

```jsx
setName(event.target.value);
```

updates the state.

The greeting changes instantly without refreshing the page.

React Rendering Process
```text
User Action
      ↓
State Update (setState)
      ↓
React Re-renders Component
      ↓
Browser Updates the Changed Content
```

**Expected Output**:

When the application starts:
```text
React Screen Update Example

Counter: 0

[Increment] [Decrement] [Reset]

Enter Your Name

____________________

Your greeting will appear here.
```

After clicking **Increment** three times:
```text
Counter: 3
```

After typing:
```text
Rahul
```

The screen immediately displays:
```text
Hello, Rahul!
```

**Result**

The React application successfully demonstrated automatic screen updates using the `useState` Hook. Whenever the component's state changed, React re-rendered the component and updated the displayed content without reloading the webpage.

**Viva Questions**
1. What is state in React?
2. What is the purpose of the `useState` Hook?
3. How does React update the screen efficiently?
4. Can a component re-render when its props change?
5. What is the difference between `setState()` and `useState()`?
6. Why is the functional updater syntax (`setCount(previous => previous + 1)`) recommended?
