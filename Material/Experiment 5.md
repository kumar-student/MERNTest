# ReactJS - RenderHTML, JSX, Components - function
### a. Write a program to render HTML to a web page

**Aim**:

To understand how to render HTML elements using JSX in a React application.

**Software Requirements**:

- Visual Studio Code
- Node.js (LTS Version)
- Internet connection (for installing React packages)

**Theory**:

A traditional web page consists of three files
- HTML -define the page structure
- CSS - styles the page
- JavaScript - adds behavior

React allows us to build web pages using components.
A react component returns JSX, which looks like HTML but is actually JavaScript.

For example

```jsx
<h1>Hello</h1>
```

looks like HTML, but JSX is compiled into JavaScript function calls during the build process. React then uses these to create and update the DOM.

React applications are ultimately displayed inside a normal HTML page.

**Project Structure**:

Create a new folder named

```shell
react-html-lab
```

Open this folder in Visual Studio Code.

Create the following folders and files.
```text
react-html-lab
│
├── package.json
├── index.html
│
└── src
      │
      ├── main.jsx
      └── App.jsx
```

Each file has a specific purpose

|File|Purpose|
|---|---|
|package.json|Stores project information and installed packages|
|index.html|The web page loaded by the browser|
|src/main.jsx|Starts the React application|
|src/App.jsx|Contains our first React component|

**Procedure**:

**Step 1**: Create the Project Folder

Create a folder named **react-html-lab**

```shell
mkdir react-html-lab
```

Step 2: Initialize a Node Project

Run

```shell
npm init -y
```

This create a file named **package.json**

**Step 3**: Install React

Install React and ReactDOM

```shell
npm install react react-dom
```

These packages allow us to create and display React components.

**Step 4**: Install **Vite**

Install the development tool

```shell
npm install -D vite @vitejs/plugin-react
```

Create **vite.config.js** file

```shell
touch vite.config.js
```

Write the following code in **vite.config.js**

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
});
```

**Step 5**: Modify package.json

Open **package.json** and replace the **scripts** section with

```json
"scripts": {
	"dev": "vite"
}
```

This allows us to start the server using

```shell
npm run dev
```

**Step 6**: Create index.html

Create a file named **index.html**

```shell
touch index.html
```

Write the following code into it

```html
<!DOCTYPE html>
<html>
	<head>
		<title>React HTML Lab</title>
	</head>
	<body>
		<div id="root"></div>
		<script type="module" src="/src/main.jsx"></script>
	</body>
</html>
```

This is the place where React will display the application

**Step 7**: Create **main.jsx**

Create **main.jsx** file inside **src** folder

```shell
touch src/main.jsx
```

Write the following code into **src/main.jsx**

```jsx
import { createRoot } from "react-dom/client";

import App from "./App";

createRoot(
	document.getElementById("root")
).render(<App />);
```

This displays the component stored inside **App.jsx**

**Step 8**: Create **App.jsx**

Create **App.jsx** insdie **src** folder

```shell
touch src/App.jsx
```

And write the following code in **src/App.jsx**

```jsx
function App() {
    const course = "ReactJS";
    
    return (
        <div>
            <h1>Welcome to {course} Lab</h1>
            <p>
                This is a simple HTML page rendered using React JSX.
            </p>
            <h2>Topics Covered</h2>
            <ul>
                <li>JSX Syntax</li>
                <li>Rendering HTML Elements</li>
                <li>Embedding JavaScript Expressions</li>
            </ul>
            <h2>Current Year</h2>
            <p>{new Date().getFullYear()}</p>
        </div>
    );
}

export default App;
```

**Step 9**: Run the Application

Run the React development server

```shell
npm run dev
```

Open the URL displayed in the terminal.

Typically http://localhost:5173

**Expected Output**:

```text
Welcome to ReactJS Lab

This is a simple HTML page rendered using React JSX.

Topics Covered

• JSX Syntax
• Rendering HTML Elements
• Embedding JavaScript Expressions

Current Year

2026
```

**Result**:

A React application was created from scratch, and HTML elements were rendered using JSX.

**Viva Questions**:

1. What is React?
2. What is JSX?
3. Why does JSX look like HTML?
4. What is a React component?
5. Why is App written as a function?
6. What is the purpose of `return` in a component?
7. Why do we use `{}` inside JSX?
8. What is the purpose of `ReactDOM.createRoot()`?
9. Why do we need `<div id="root"></div>`?
10. What is the purpose of `export default App`?

**Learning Outcomes**:

After completing this experiment, students will be able to:

- Explain the purpose of each file in a simple React project.
- Create a React project structure manually.
- Understand how React is connected to an HTML page.
- Write their first React component.
- Render HTML using JSX.
- Embed JavaScript expressions inside JSX.
- Run a React application using Vite.

#### Appendix A: Creating the Same Project Using Vite

In this experiment, we manually created the files required for a React application to understand how React works internally.

In practice, developers use **Vite** to automatically generate the project structure.

**Step 1**: Create a Project

```bash
npm create vite@latest react-html-lab -- --template react
```

**Step 2**: Move to the Project Folder

```bash
cd react-html-lab
```

**Step 3**: Install Dependencies

```bash
npm install
```

**Step 4**: Start the Development Server

```bash
npm run dev
```

**Step 5**: Replace `src/App.jsx`

Replace the contents of `src/App.jsx` with the program used in this experiment.

No other files need to be modified.

**Observation**:

Notice that Vite automatically creates several additional files such as:

- `vite.config.js`
- `eslint.config.js`
- `package.json`
- `public/`
- `src/assets/`

These files provide development tools and project configuration. The React code written in `App.jsx` remains the same.

#### Extension Activity (Optional)
Exploring HTML Strings and Safe Rendering in React

>**Note**
>This activity is **not part of the core experiment**. It is provided for learning purposes to introduce how React handles HTML strings and why rendering user-supplied HTML requires caution.

**Objective**:
To understand the difference between rendering JSX and rendering HTML stored as a string.

**Background**:
Normally, React renders UI using **JSX**, which automatically escapes potentially unsafe content.

Sometimes applications need to display HTML received from:

- Content Management Systems (CMS)
- Rich-text editors
- Markdown converters
- Database content
- User input

In such cases, React provides the `dangerouslySetInnerHTML` property.

Because this bypasses React's normal protection against Cross-Site Scripting (XSS), the HTML **must be sanitized** before rendering.

**Example Program**:

Create a new file:

```shell
touch src/RenderHtmlExample.jsx
```

Copy the example program into this file.

>**Note:** The following example is for demonstration only. In production applications, libraries such as **DOMPurify** should be used instead of the simple sanitizer shown here.

(Insert the existing `RenderHtmlExample.jsx` program here with only minor corrections.)

**Running the Example**

Replace the contents of `main.jsx` (or `index.js` if using Create React App) with:

```js
import { createRoot } from "react-dom/client";
import "./index.css";

import RenderHtmlExample from "./RenderHtmlExample";

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RenderHtmlExample />
	</React.StrictMode>
);
```

Run the project.

**What to Observe**:

While using the application:

1. Edit the HTML inside the text area.
2. Observe the sanitized HTML.
3. Compare the rendered output with the original input.
4. Enable **Use `dangerouslySetInnerHTML`** and observe that React renders the sanitized HTML string directly.
5. Notice that `<script>` tags and inline event handlers (such as `onclick`) are removed by the simple sanitizer.

**Discussion**:

JSX Rendering:

```js
<h1>Hello React</h1>
```

React creates UI elements directly.

This is the recommended approach.

Rendering HTML Strings:

```js
const html = `
	<h1>Hello</h1>
	<script>alert("XSS")</script>
`;

<div dangerouslySetInnerHTML={{ __html: html }} />
```

React inserts the HTML into the DOM exactly as provided.

This should only be done with trusted or sanitized content.

**Important Notes**:

- Prefer **JSX** whenever possible.
- Avoid rendering raw HTML strings unless required.
- Never render user-generated HTML without sanitization.
- The provided sanitizer is intentionally simple and is **not suitable for production applications**.
- Production React applications commonly use **DOMPurify** or equivalent libraries for sanitization.

**Learning Outcomes**:

After completing this optional activity, students should be able to:

- Explain why JSX is safer than raw HTML strings.
- Describe the purpose of `dangerouslySetInnerHTML`.
- Explain what HTML sanitization is.
- Understand the security risks of rendering untrusted HTML.

### b: Write and Render Markup using JSX in React

**Aim**:

To understand how to write and render JSX in React by displaying static and dynamic content using JavaScript expressions.

**Software Requirements**:

- Node.js (LTS version)
- React 18 or later
- Visual Studio Code
- Modern web browser (Chrome/Edge/Firefox)

**Procedure**:

1. Create a React application using Vite or Create React App.
2. Open the project in Visual Studio Code.
3. Open the `src/App.jsx` file.
4. Replace the existing code with the following JSX program.
5. Save the file.
6. Start the development server using:

```shell
npm run dev
```

7. Open the application in the browser and observe the output.

**Program**:

**src/App.jsx**

```jsx
function App() {
	const title = "Welcome to JSX";
	const student = "Alice";
	const age = 20;

	const topics = [
		"JSX Syntax",
		"JavaScript Expressions",
		"Component Rendering"
	];

	return (
		<div style={{ padding: "20px", fontFamily: "Arial" }}>
		    <h1>{title}</h1>
		    <p>
			    Hello, <strong>{student}</strong>!
		    </p>
		    <p>Age: {age}</p>
		    <h2>Topics Covered</h2>
		    <ul>
		        {topics.map((topic, index) => (
			        <li key={index}>{topic}</li>
			    ))}
		    </ul>
		    <p>Status: {age >= 18 ? "Eligible" : "Not Eligible"}</p>
		</div>
	);
}

export default App;
```

**Expected Output**:

The browser displays a page similar to:

```
Welcome to JSX

Hello, Alice!
Age: 20

Topics Covered
• JSX Syntax
• JavaScript Expressions
• Component Rendering

Status: Eligible
```

**Result**:

The JSX markup was successfully rendered in the browser, demonstrating the use of HTML-like syntax, JavaScript expressions, lists, and conditional rendering within a React component.

**Viva Questions**:

1. What is JSX, and why is it used in React?
2. How is JSX different from HTML?
3. What is the purpose of curly braces `{}` in JSX?
4. Why is the `key` prop required when rendering lists?
5. Can JavaScript expressions be used inside JSX? Give examples.
6. How do you perform conditional rendering in JSX?
7. Why must a React component return a single parent element?
8. What happens when JSX is compiled?
9. What is the difference between JSX and JavaScript?
10. Can JSX be written without using React-specific syntax? Explain.

### c. Write a program for creating and nesting components in React

**Aim**:

To understand how to create functional and class components, pass data using props, and nest child components inside a parent component in React.

**Software Requirements**:

- Node.js (LTS version)
- React 18 or later
- Visual Studio Code
- Modern web browser (Chrome/Edge/Firefox)

**Procedure**:

1. Create a React application using Vite or Create React App.
2. Open the project in Visual Studio Code.
3. Open the `src/App.jsx` file.
4. Replace the existing code with the following program.
5. Save the file.
6. Start the development server using:

```shell
npm run dev
```

7. Open the application in the browser and observe the output.

**Program**:

**src/App.jsx**

```jsx
import { Component } from "react";
import { useState } from 'react';
import './App.css';

function Header({ title }) {
  return <h1>{title}</h1>;
}

class Student extends Component {
  render() {
    return (
      <>
        <div>
          <p>Name: {this.props.name}</p>
          <p>Course: {this.props.course}</p>
        </div>
      </>
    );
  }
}

function Footer() {
  return <p>React Component Demonstration</p>
}

function App() {
  return (
    <>
      <div>
        <Header title="Component Nesting Example" />
        <Student
          name="Alice"
          course="React Development"
        />
        <Footer />
      </div>
    </>
  );
}

export default App
```

**Expected Output**:

The browser displays:

```
Component Nesting Example

Name: Alice
Course: React Development

React Component Demonstration
```

**Result**:

The functional and class components were successfully created and nested inside the parent component. Data was passed from the parent component to the child components using props, and the components were rendered correctly in the browser.

**Viva Questions**:

1. What is a React component?
2. What is the difference between functional and class components?
3. How are props passed from a parent component to a child component?
4. How do you access props in a class component?
5. Why is component nesting useful in React?
6. What is the purpose of the `render()` method in a class component?
7. Which type of component is preferred in modern React development, and why?
8. Can a functional component contain other components? Explain.
9. What is the role of the parent component in React?
10. How does React encourage code reusability through components?
