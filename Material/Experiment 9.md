## ReactJS – Hooks, Sharing data between Components

### a. Write a program to understand the importance of using hooks

**Aim**:
To understand how the `useState` and `useEffect` Hooks are used in functional React components to manage state and perform side effects.

**Software / Tools Required**:
- Visual Studio Code
- Node.js (LTS version)
- React (using Vite)
- Web browser (Chrome, Edge, or Firefox)

**Theory**:
React Hooks allow functional components to use features that were previously available only in class components, such as state management and lifecycle behavior.

In this experiment:
- `useState` stores and updates data.
- `useEffect` performs a side effect whenever the state changes.

A **side effect** is any operation that interacts with something outside the component, such as updating the browser tab title, fetching data, or setting up timers.

**Step-by-Step Procedure**:

**Step 1**: Verify Node.js Installation

Open a terminal and run:
```bash
node -v
npm -v
```

Both commands should display version numbers.

**Step 2**: Create a React Project

```bash
npm create vite@latest react-hooks-lab -- --template react
```

Choose:
- **Framework:** React
- **Variant:** JavaScript

**Step 3**: Open the Project

```bash
cd react-hooks-lab
```

**Step 4**: Install Dependencies

```bash
npm install
```

**Step 5**: Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal (typically `http://localhost:5173`).

**Step 6**: Replace the Contents of `src/App.jsx`

Delete the existing code and replace it with the following.

**Program**:

```jsx
import { useState, useEffect } from "react";

function App() {
	const [count, setCount] = useState(0);
	
	useEffect(() => {
		document.title = `Count: ${count}`;
	}, [count]);
	
	const increment = () => {
		setCount((previousCount) => previousCount + 1);
	};
	
	return (
	<div
		style={{
			textAlign: "center",
			marginTop: "40px",
			fontFamily: "Arial",
		}}
	>
		<h1>React Hooks Example</h1>
		<h2>Count: {count}</h2>
		
		<button onClick={increment}>
			Increment
		</button>
		
		<p>
			Open your browser tab and notice that its title changes
			whenever the counter changes.
		</p>
		</div>
	);
}

export default App;
```

**How the Program Works**:

**Step 1**: Creating State

```jsx
const [count, setCount] = useState(0);
```

- `count` stores the current counter value.
- `setCount()` updates the counter.

Initially,

```
count = 0
```

**Step 2**: Updating the State

When the button is clicked,

```jsx
setCount((previousCount) => previousCount + 1);
```

React updates the state and re-renders the component.

**Step 3**: Running a Side Effect

```jsx
useEffect(() => {
	document.title = `Count: ${count}`;
}, [count]);
```

This updates the browser tab title every time the value of `count` changes.

The dependency array

```jsx
[count]
```

tells React to run the effect only when `count` changes.

**React Execution Flow**

```text
Application Starts
        ↓
Component Renders
        ↓
useEffect Executes
        ↓
Browser Tab Title Updated
        ↓
User Clicks Increment
        ↓
State Changes
        ↓
Component Re-renders
        ↓
useEffect Runs Again
        ↓
Browser Tab Title Updated Again
```

Why Hooks Are Important

Without Hooks (Class Components):
- Constructor
- `this.state`
- `this.setState()`
- `componentDidMount()`
- `componentDidUpdate()`

With Hooks (Functional Components):
- `useState()`
- `useEffect()`

Hooks make React components shorter, easier to read, and easier to maintain.

**Rules of Hooks**
1. Always call Hooks at the top level of a component.
2. Never call Hooks inside loops, conditions, or nested functions.
3. Hooks can only be used inside React function components or custom Hooks.

**Expected Output**:

When the application starts:
```
React Hooks Example

Count: 0

[ Increment ]
```

Browser tab title:
```
Count: 0
```

After clicking **Increment**:
```
Count: 1
```

Browser tab title changes to:
```
Count: 1
```

Every click increases the counter and updates the browser tab title automatically.

**Result**:
The experiment successfully demonstrated the importance of React Hooks. The `useState` Hook was used to manage component state, while the `useEffect` Hook performed a side effect by updating the browser tab title whenever the state changed. This showed how functional components can efficiently manage state and lifecycle-related behavior using Hooks.

**Viva Questions**:
1. What are React Hooks?
2. What is the difference between `useState` and `useEffect`?
3. Can Hooks be used in class components?
4. Why is the dependency array important in `useEffect`?

### b. Write a program for sharing data between components

**Aim**:
To learn how to share data between parent and child components in React using **props** and **callback functions**, and to understand the concept of **lifting state up**.

**Learning Outcomes**:
After completing this experiment, you will be able to:
- Create functional React components.
- Use the `useState` Hook to store component state.
- Pass data from a parent component to a child component using props.
- Pass a function from a parent component to a child component.
- Update the parent component's state from a child component.
- Understand the concept of lifting state up.

**Prerequisites**:
Before starting this experiment, ensure that you have:
- Node.js (LTS version) installed
- Visual Studio Code
- A modern web browser (Chrome, Edge, or Firefox)
- Basic knowledge of JavaScript functions

**Theory**:
React applications are built using **components**. Components often need to exchange information.

There are two common ways to share data:
1. **Parent → Child:** Data is passed using **props**.
2. **Child → Parent:** A child cannot directly modify the parent's state. Instead, the parent passes a **callback function** to the child, and the child calls that function when it wants to send information back.

This technique is known as **lifting state up**, where shared state is stored in the nearest common parent component.

**Data Flow**:
```
              Parent Component (App)
                     │
          user data (props)
                     │
                     ▼
          DisplayUser Component

                     ▲
      callback function (onUpdate)
                     │
          UpdateUser Component
```

**Procedure**:

**Step 1**: Create a React Project

Open the terminal and create a new React project using Vite.

```shell
npm create vite@latest component-sharing -- --template react
```

**Step 2**: Navigate to the Project Folder

```shell
cd component-sharing
```

**Step 3**: Install Dependencies

```shell
npm install
```

**Step 4**: Start the Development Server

```shell
npm run dev
```

A local development URL (such as `http://localhost:5173`) will be displayed.

Open it in your browser.

**Step 5**: Replace the App Component

Open:

```
src/App.jsx
```

Replace its contents with the following program.

**Program**:

```jsx
import React, { useState } from "react";

// Displays the user information
function DisplayUser({ user }) {
	return (
		<div
			style={{
				border: "1px solid #0077cc",
				padding: "10px",
				margin: "10px 0",
				borderRadius: "8px",
				backgroundColor: "#f0f8ff",
			}}
		>
			<h3>User Information</h3>
			
			<p>
				<strong>Name:</strong> {user.name}
			</p>
			
			<p>
				<strong>Age:</strong> {user.age}
			</p>
			
			<p>
				<strong>Email:</strong> {user.email}
			</p>
		</div>
	);
}

// Updates the user information
function UpdateUser({ onUpdate }) {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [email, setEmail] = useState("");
	
	const handleSubmit = (event) => {
		event.preventDefault();
	
		if (!name || !age || !email) {
			alert("Please fill all fields.");
			return;
		}
		
		onUpdate({
			name,
			age: Number(age),
			email,
		});
		
		setName("");
		setAge("");
		setEmail("");
	};
	
	return (
		<form
			onSubmit={handleSubmit}
			style={{
				border: "1px solid #ccc",
				padding: "10px",
				borderRadius: "8px",
				marginTop: "20px",
				backgroundColor: "#f9f9f9",
			}}
		>
			<h3>Update User Information</h3>
			<label>Name</label>
			<input
				type="text"
				value={name}
				placeholder="Enter name"
				onChange={(e) => setName(e.target.value)}
				style={{ width: "100%", marginBottom: "10px", padding: "6px" }}
			/>
			<label>Age</label>
			<input
				type="number"
				value={age}
				placeholder="Enter age"
				onChange={(e) => setAge(e.target.value)}
				style={{ width: "100%", marginBottom: "10px", padding: "6px" }}
			/>	
			<label>Email</label>
			<input
				type="email"
				value={email}
				placeholder="Enter email"
				onChange={(e) => setEmail(e.target.value)}
				style={{ width: "100%", marginBottom: "10px", padding: "6px" }}
			/>
			<button
				type="submit"
				style={{
				  padding: "8px 16px",
				  backgroundColor: "#0077cc",
				  color: "white",
				  border: "none",
				  borderRadius: "6px",
				  cursor: "pointer",
				}}
			>
				Update User
			</button>
		</form>
	);
}

// Parent component
function App() {
	const [user, setUser] = useState({
		name: "John",
		age: 25,
		email: "john@example.com",
	});
	
	return (
		<main
			style={{
				maxWidth: "420px",
				margin: "40px auto",
				fontFamily: "Arial, sans-serif",
			}}
	>	
			<h1>Sharing Data Between Components</h1>
			{/* Parent → Child */}
			<DisplayUser user={user} />	
			{/* Child → Parent */}
			<UpdateUser onUpdate={setUser} />
		</main>
	);
}

export default App;
```

**How the Program Works**:

**Step 1**

The **App** component stores the user information using the `useState` Hook.

```
const [user, setUser] = useState(...);
```

This state belongs to the parent component.

**Step 2**

The parent sends the user object to the **DisplayUser** component.

```
<DisplayUser user={user} />
```

The child component receives the data using **props** and displays it.

**Step 3**

The parent also passes the state update function to the **UpdateUser** component.

```
<UpdateUser onUpdate={setUser} />
```

Here, `onUpdate` is a callback function.

**Step 4**

When the user submits the form, the child component calls

```
onUpdate(...)
```

This updates the parent's state.

**Step 5**

Whenever the parent state changes, React automatically re-renders the components and displays the updated information.

**Expected Output**:

Initially, the application displays:

```
Sharing Data Between Components

User Information

Name: John
Age: 25
Email: john@example.com
```

Suppose the following values are entered:

```
Name : Alice
Age  : 21
Email: alice@example.com
```

After clicking **Update User**, the displayed information changes to:

```
User Information

Name: Alice
Age: 21
Email: alice@example.com
```

**Observation**:
- The parent component stores the application data.
- The child component displays the data using props.
- Another child component updates the parent's state using a callback function.
- React automatically updates the displayed information whenever the state changes.

**Result**:
The experiment was successfully completed. Data was shared between parent and child components using **props**, and the parent component's state was updated from the child component using a **callback function**, demonstrating the concept of **lifting state up**.
### c. Write a program to understand `useReducer` and `useContext`

**Aim**:  
To understand how the `useReducer` Hook is used to manage state with actions and how the `useContext` Hook is used to share data between components without passing props manually through every level.

**Learning Outcomes**:  
After completing this experiment, you will be able to:

- Use the `useReducer` Hook for state management.
- Create actions and a reducer function.
- Use the `useContext` Hook to share data between components.
- Create and use a React Context.
- Understand an alternative to passing props through multiple components.

**Theory**:

### `useReducer`

`useReducer` is a React Hook used to manage state when the state logic involves multiple actions.

It works with:

- **State** – the current data.
- **Action** – describes what should happen.
- **Reducer** – a function that calculates the new state.

Basic syntax:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

The `dispatch()` function sends an action to the reducer.

### `useContext`

`useContext` allows components to access shared data directly from a Context without passing that data through props.

The basic flow is:

```
Context
   ↓
Provider
   ↓
Child Components
   ↓
useContext()
```

In this experiment, `useReducer` will manage a counter and `useContext` will make the counter state and `dispatch` function available to another component.

## Procedure

### Step 1: Create a React Project

Open the terminal and create a React project using Vite.

```shell
npm create vite@latest reducer-context-lab -- --template react
```

### Step 2: Navigate to the Project Folder

```shell
cd reducer-context-lab
```

### Step 3: Install Dependencies

```shell
npm install
```

### Step 4: Start the Development Server

```shell
npm run dev
```

Open the local development URL displayed in the terminal.

### Step 5: Replace `src/App.jsx`

Replace the contents of `src/App.jsx` with the following program.

## Program

```jsx
import React, {
	useReducer,
	useContext,
	createContext,
} from "react";

// Create Context
const CounterContext = createContext();

// Reducer function
function counterReducer(state, action) {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };

		case "decrement":
			return { count: state.count - 1 };

		case "reset":
			return { count: 0 };

		default:
			return state;
	}
}

// Component that displays the counter
function CounterDisplay() {
	const { state } = useContext(CounterContext);

	return (
		<h2>Count: {state.count}</h2>
	);
}

// Component that controls the counter
function CounterButtons() {
	const { dispatch } = useContext(CounterContext);

	return (
		<div>
			<button onClick={() => dispatch({ type: "increment" })}>
				Increment
			</button>

			<button
				onClick={() => dispatch({ type: "decrement" })}
				style={{ marginLeft: "10px" }}
			>
				Decrement
			</button>

			<button
				onClick={() => dispatch({ type: "reset" })}
				style={{ marginLeft: "10px" }}
			>
				Reset
			</button>
		</div>
	);
}

// Main App component
function App() {
	const [state, dispatch] = useReducer(counterReducer, {
		count: 0,
	});

	return (
		<CounterContext.Provider value={{ state, dispatch }}>
			<div
				style={{
					textAlign: "center",
					marginTop: "50px",
					fontFamily: "Arial",
				}}
			>
				<h1>useReducer and useContext Example</h1>

				<CounterDisplay />

				<CounterButtons />
			</div>
		</CounterContext.Provider>
	);
}

export default App;
```

## How the Program Works

### Step 1: Creating the Context

```jsx
const CounterContext = createContext();
```

`createContext()` creates a Context object that can store data shared between components.

### Step 2: Creating the Reducer

```jsx
function counterReducer(state, action) {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 };

		case "decrement":
			return { count: state.count - 1 };

		case "reset":
			return { count: 0 };

		default:
			return state;
	}
}
```

The reducer receives the current `state` and an `action`.

For example:

```jsx
{ type: "increment" }
```

increases the counter by one.

### Step 3: Using `useReducer`

```jsx
const [state, dispatch] = useReducer(counterReducer, {
	count: 0,
});
```

Here:

- `state` contains the current counter value.
- `dispatch()` sends an action.
- `counterReducer` determines the new state.
- The initial value of `count` is `0`.

### Step 4: Providing Data Through Context

```jsx
<CounterContext.Provider value={{ state, dispatch }}>
```

The `Provider` makes both `state` and `dispatch` available to components inside it.

### Step 5: Reading Context Data

The `CounterDisplay` component uses:

```jsx
const { state } = useContext(CounterContext);
```

It can then display:

```jsx
<h2>Count: {state.count}</h2>
```

No props are required.

### Step 6: Dispatching Actions

The `CounterButtons` component obtains `dispatch` using:

```jsx
const { dispatch } = useContext(CounterContext);
```

When the Increment button is clicked:

```jsx
dispatch({ type: "increment" });
```

The action is sent to the reducer.

The reducer updates the state, and React re-renders the components using the updated value.

## React Execution Flow

```
Application Starts
        ↓
useReducer creates state
        ↓
CounterContext.Provider
        ↓
State and dispatch shared
        ↓
CounterDisplay reads state
        ↓
CounterButtons reads dispatch
        ↓
User clicks Increment
        ↓
dispatch({ type: "increment" })
        ↓
Reducer processes action
        ↓
State is updated
        ↓
Components re-render
        ↓
New counter value displayed
```

## Expected Output

Initially:

```
useReducer and useContext Example

Count: 0

[ Increment ] [ Decrement ] [ Reset ]
```

After clicking **Increment**:

```
Count: 1
```

After clicking **Increment** again:

```
Count: 2
```

After clicking **Decrement**:

```
Count: 1
```

After clicking **Reset**:

```
Count: 0
```

## Observation

- `useReducer` manages the counter state using actions.
- The reducer determines how the state changes.
- `useContext` allows components to access shared data.
- `CounterDisplay` receives the state through Context.
- `CounterButtons` receives the `dispatch` function through Context.
- No props are passed between `App`, `CounterDisplay`, and `CounterButtons`.

## Result

The experiment was successfully completed. The `useReducer` Hook was used to manage counter state through actions and a reducer function. The `useContext` Hook was used to share the state and `dispatch` function between components without passing them through props. This demonstrated how `useReducer` and `useContext` can be used together for simple shared state management in React.

## Viva Questions

1. What is the purpose of `useReducer`?
2. What are `state`, `action`, and `dispatch`?
3. What is a reducer function?
4. What is the purpose of `useContext`?
5. What is the difference between props and Context?
6. What is the purpose of `createContext()`?
7. What does `dispatch()` do?
8. Can `useReducer` and `useContext` be used together?
9. What is a Context Provider?
10. Why can Context help avoid prop drilling?
