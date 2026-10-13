## ReactJS Applications – To-do list and Quiz
### a. Design and Implement a To-Do List Application Using ReactJS

**Aim**:

To design and implement a **To-Do List application** using **ReactJS** that enables users to add, display, mark as completed, and delete tasks dynamically using the `useState` Hook.

**Theory**:

ReactJS is an open-source JavaScript library used for building interactive and reusable user interfaces. Applications in React are developed using **components**, which are independent and reusable pieces of code.

A **state** is a special object that stores data which can change during the execution of an application. React provides the `useState` Hook to manage state inside functional components. Whenever the state changes, React automatically updates the user interface without reloading the page.

In this experiment, the To-Do List application demonstrates the following React concepts:

- Functional Components
- React Hooks (`useState`)
- State Management
- Event Handling
- Controlled Components
- Conditional Rendering
- Rendering Lists using `map()`
- Updating and Deleting State

**Software/Tools Required**:

• Visual Studio Code
• Node.js (LTS Version)
• npm
• Vite
• ReactJS (latest stable version)
• Google Chrome / Microsoft Edge

Project Creation

> This experiment uses **Vite**, a modern frontend build tool recommended for creating React applications. It provides faster development, hot module replacement (HMR), and optimized production builds.

Open the terminal and execute the following commands:

```shell
npm create vite@latest todo-app -- --template react
cd todo-app
npm install
npm run dev
```

The development server starts automatically and opens the application in the default web browser.

Open the project in Visual Studio Code:

```
code .
```

**Project Structure**

Only the **App.js** file is modified in this experiment.

```
todo-app/
│
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── index.html
├── package.json
├── vite.config.js
└── ...
```

**Procedure**:

1. Install **Node.js** and **Visual Studio Code**.
2. Open the terminal.
3. 3. Create a React application using Vite.
4. Navigate to the project directory.
5. Install project dependencies.
6. Start the development server.
7. Navigate to the project directory.
8. Start the React development server using `npm start`.
9. Open the project in Visual Studio Code.
10. Open the **src** folder.
11. Replace the contents of **App.js** with the following program.
12. Save the file.
13. Vite automatically updates the browser whenever the file is saved using **Hot Module Replacement (HMR).
14. Enter a task in the text box.
15. Click **Add** to insert the task into the list.
16. Click a task to mark it as completed.
17. Click **Delete** to remove a task.
18. Repeat the above steps to verify the application's functionality.

**Program**:

`App.jsx`
```jsx
import React, { useState } from "react";

// Component to display a single task
function TodoItem({ todo, onToggleComplete, onDelete }) {
	return (
		<li
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "10px",
				borderBottom: "1px solid #ccc",
				textDecoration: todo.completed ? "line-through" : "none",
			}}
		>
			<span
				onClick={() => onToggleComplete(todo.id)}
				style={{ cursor: "pointer" }}
			>
				{todo.text}
			</span>
			<button
				onClick={() => onDelete(todo.id)}
				style={{
					backgroundColor: "red",
					color: "white",
					border: "none",
					borderRadius: "4px",
					padding: "5px 10px",
					cursor: "pointer",
				}}
			>
				Delete
			</button>
		</li>
	);
}

// Main Component
function TodoApp() {
	// State variable to store all tasks
	const [todos, setTodos] = useState([]);
	
	// State variable to store input text
	const [input, setInput] = useState("");
	
	// Add a new task
	const handleAdd = (e) => {
		e.preventDefault();
	    
	    if (input.trim() === "") 
		    return;
		    
	    setTodos((prevTodos) => [
			...prevTodos,
			{
		        id: crypto.randomUUID(),
		        text: input,
		        completed: false,
		    },
	    ]);
	    setInput("");
	};
	
	// Toggle completed status
	const toggleComplete = (id) => {
	    setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id
				? { ...todo, completed: !todo.completed }
				: todo
			)
		);
	};
	
	// Delete a task
	const deleteTodo = (id) => {
	    setTodos((prevTodos) =>
		    prevTodos.filter((todo) => todo.id !== id)
		);
	};
	
	return (
	    <div
		    style={{
		        maxWidth: "500px",
		        margin: "50px auto",
		        textAlign: "center",
			}}
		>
			<h1>To-Do List App</h1>
		    <form
			    onSubmit={handleAdd}
			    style={{ marginBottom: "20px" }}
			>
			    <input
			        type="text"
			        value={input}
			        placeholder="Enter a new task"
			        onChange={(e) => setInput(e.target.value)}
			        style={{
				        padding: "10px",
				        width: "70%",
				        marginRight: "10px",
				        borderRadius: "6px",
				        border: "1px solid #ccc",
			        }}
			    />
			    <button
			        type="submit"
			        style={{
			            padding: "10px 20px",
			            borderRadius: "6px",
			            backgroundColor: "#0077cc",
			            color: "white",
			            border: "none",
			            cursor: "pointer",
			        }}
		    >	
			        Add
			    </button>
		    </form>
			<ul style={{ listStyle: "none", padding: 0 }}>
			    {todos.length === 0 && (
			        <p>No tasks added yet.</p>
			    )}
			    {todos.map((todo) => (
			        <TodoItem
				        key={todo.id}
				        todo={todo}
				        onToggleComplete={toggleComplete}
				        onDelete={deleteTodo}
			        />
			    ))}
		    </ul>
		</div>
	);
}

export default TodoApp;
```

The application entry point is `src/main.jsx`, which renders the `App` component into the browser.

**Expected Output**:

Initial Screen

When the application is launched, an input box and **Add** button are displayed. Since no tasks have been added yet, the message **"No tasks added yet."** is shown.

After Adding Tasks

When the user enters tasks such as **Buy Books**, **Complete Assignment**, and **Practice React**, and clicks the **Add** button after each entry, the tasks are displayed as a list. Each task appears with a corresponding **Delete** button.

After Marking a Task as Completed

When the user clicks the **Buy Books** task, it is marked as completed by displaying the text with a strike-through effect. The remaining tasks continue to appear as pending. The **Delete** button remains available for all tasks, allowing any task to be removed from the list.

**Observation**:

- Tasks are added dynamically without refreshing the page.
- Clicking a task toggles its completion status.
- Clicking **Delete** removes the task immediately.
- React automatically updates the user interface whenever the state changes.

**Result**:

The To-Do List application was successfully designed and implemented using ReactJS. The application allows users to add, display, mark as completed, and delete tasks dynamically using the `useState` Hook.

**Learning Outcomes**:

After completing this experiment, students will be able to:

- Create a React application using Vite.
- Understand React functional components.
- Use the `useState` Hook.
- Handle user input using controlled components.
- Render lists dynamically using `map()`.
- Update and delete state values.
- Build simple interactive React applications.

**Viva Questions**:

1. What is the purpose of the `useState` Hook?
2. What is state in React?
3. Why are functional updates (`setState(previous => ...)`) recommended?
4. Why should each list item have a unique `key`?
5. What is a controlled component?
6. What is conditional rendering?
7. What is the purpose of the `map()` function in React?
8. What is Hot Module Replacement (HMR)?
9. What is a controlled component?

---
### b. Design and Implement a Quiz Application Using ReactJS

**Aim**:

To design and implement a **Quiz Application** using **ReactJS** that displays multiple-choice questions, accepts user responses, calculates the score, and displays the final result using the `useState` Hook.

**Theory**:

ReactJS is a JavaScript library used for building interactive user interfaces using reusable components. The **useState** Hook allows functional components to store and update data dynamically.

A quiz application is a simple example of state management in React. It displays one question at a time, records the user's answer, updates the score when the answer is correct, and displays the final result after all questions have been answered.

This experiment demonstrates the following React concepts:

- Functional Components
- React Hooks (`useState`)
- Event Handling
- Conditional Rendering
- Rendering Lists using `map()`
- State Management

**Software/Tools Required**:

• Visual Studio Code
• Node.js (LTS Version)
• npm
• Vite
• ReactJS (latest stable version)
• Google Chrome / Microsoft Edge

**Project Creation**

> **Note:** This experiment uses **Vite**, the modern build tool recommended for creating React applications. Vite provides faster development, Hot Module Replacement (HMR), and optimized production builds.

Open the terminal and execute the following commands:

```bash
npm create vite@latest quiz-app -- --template react
cd quiz-app
npm install
npm run dev
```

Open the project in Visual Studio Code:

```bash
code .
```

**Project Structure**:

Only the **App.js** file is modified in this experiment.

```text
quiz-app/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── ...
```

**Procedure**:

1. Install Node.js and Visual Studio Code.
2. Open the terminal.
3. Create a React application using Vite.
4. Navigate to the project directory.
5. Install project dependencies using `npm install`.
6. Start the development server using `npm run dev`.
7. Open the project in Visual Studio Code.
8. Open the `src` folder.
9. Replace the contents of **App.jsx** with the given program.
10. Save the file.
11. Observe that Vite updates the application automatically using **Hot Module Replacement (HMR)**.
12. Answer each question by clicking one of the options.
13. Continue until all questions have been answered.
14. Observe the final score.
15. Click **Restart Quiz** to start the quiz again.

**Program**:

`App.jsx`
```jsx
import React, { useState } from "react";

function App() {
	const questions = [
	{
		questionText: "What is the capital of France?",
		options: ["Paris", "London", "Berlin", "Madrid"],
		correctAnswer: 0,
	},
	{
		questionText: "Which language is commonly used for React applications?",
		options: ["Python", "JavaScript", "C++", "Java"],
		correctAnswer: 1,
	},
	{
		questionText: "React is mainly used for building?",
		options: [
			"Database",
			"User Interface",
			"Networking",
			"File System",
		],
		correctAnswer: 1,
	},
	];
	
	// Stores the current question index
	const [currentQuestion, setCurrentQuestion] = useState(0);
	
	// Stores the user's score
	const [score, setScore] = useState(0);
	
	// Controls whether the score screen is displayed
	const [showScore, setShowScore] = useState(false);
	
	// Handles answer selection
	const handleAnswer = (selectedIndex) => {
		if (selectedIndex === questions[currentQuestion].correctAnswer) {
			setScore((prevScore) => prevScore + 1);
		}
		
		const nextQuestion = currentQuestion + 1;
		
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} 
		else {
			setShowScore(true);
		}
	};
	
	// Restarts the quiz
	const restartQuiz = () => {
		setCurrentQuestion(0);
		setScore(0);
		setShowScore(false);
	};
	
	return (
		<div
			style={{
				textAlign: "center",
				marginTop: "50px",
				fontFamily: "Arial, sans-serif",
			}}
		>
			<h1>React Quiz Application</h1>
			{showScore ? (
				<div>
					<h2>
						Your Score: {score} / {questions.length}
					  </h2>
					  <button onClick={restartQuiz}>Restart Quiz</button>
				</div>
				) : (
				<div>
					<h2>
						Question {currentQuestion + 1} of {questions.length}
					</h2>
					<p>{questions[currentQuestion].questionText}</p>
					{questions[currentQuestion].options.map((option, index) => (
						<button
							key={index}
							onClick={() => handleAnswer(index)}
							style={{
								display: "block",
								margin: "10px auto",
								padding: "10px 20px",
								cursor: "pointer",
							}}
					>	
							{option}
						</button>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
```

The application entry point is **src/main.jsx**, which renders the `App` component. This file is generated automatically by Vite and does not need to be modified for this experiment.

**Expected Output**:

Initial Screen

When the application starts, the first question along with its answer options is displayed.

During the Quiz

Each time the user selects an answer, the application automatically displays the next question until all questions have been answered.

Final Screen

After answering the last question, the application displays the user's total score along with a **Restart Quiz** button. Clicking the button restarts the quiz from the first question.

**Observation**:

- Only one question is displayed at a time.
- Selecting an option immediately loads the next question.
- The score is updated whenever the selected answer is correct.
- The final score is displayed after the last question.
- Clicking **Restart Quiz** resets the application without reloading the page.

**Result**

The Quiz Application was successfully designed and implemented using ReactJS. The application displays questions one at a time, accepts user responses, calculates the score, and displays the final result using the `useState` Hook.

**Learning Outcomes**:

After completing this experiment, students will be able to:

- Create a React application using Vite.
- Use the `useState` Hook.
- Implement state management in React.
- Handle button click events.
- Render lists dynamically using `map()`.
- Perform conditional rendering.
- Build a simple interactive quiz application.

**Viva Questions**:

1. What is the purpose of the `useState` Hook?
2. Why is state used in the quiz application?
3. How does conditional rendering display the score screen?
4. Why are unique `key` values used while rendering lists?
5. What is the purpose of the `map()` function in React?
6. What is the difference between state and props?
7. Why is `setScore((prevScore) => prevScore + 1)` preferred over `setScore(score + 1)`?
8. Why is a separate `restartQuiz()` function preferred over reloading the page?
9. How can quiz questions be loaded from an external API?
10. How can this application be enhanced to show the correct answer after each question?
