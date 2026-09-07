## ReactJS – Conditional Rendering, Rendering Lists, React Forms

### a. Write a program for conditional rendering.

**Aim**:
To understand and implement **conditional rendering** in React using the `useState` Hook, the **ternary operator (`?:`)**, and the **logical AND (`&&`) operator**.

**Software Requirements**
- Visual Studio Code
- Node.js (LTS Version)
- React (using Vite or Create React App)

**Procedure**:
1. Create a React project using **Vite** or **Create React App**.
2. Open the project in Visual Studio Code.
3. Open the `src/App.jsx` (Vite) or `src/App.js` (Create React App) file.
4. Import the `useState` Hook from React.
5. Create a boolean state variable to store the user's login status.
6. Use the **ternary operator** to display different messages based on the login status.
7. Use conditional expressions to change the button text, color, and click action.
8. Use the **logical AND (`&&`) operator** to display additional content only when the user is logged in.
9. Save the file and run the application using:
```shell
npm run dev
```
10. Observe the output in the browser.

**Program**:
```jsx
import { useState } from "react";

function ConditionalRenderingDemo() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	
	const handleLogin = () => setIsLoggedIn(true);
	const handleLogout = () => setIsLoggedIn(false);
	
	return (
		<div style={{ textAlign: "center", marginTop: "50px" }}>
			<h1>Conditional Rendering Example</h1>
			{/* Conditional rendering using the ternary operator */}
			{isLoggedIn ? (
				<h2>Welcome back, User!</h2>
			) : (
				<h2>Please log in to continue.</h2>
			)}
			{/* Conditional button text, color and event handler */}
			<button
				onClick={isLoggedIn ? handleLogout : handleLogin}
				style={{
					padding: "10px 20px",
					marginTop: "20px",
					backgroundColor: isLoggedIn ? "red" : "green",
					color: "white",
					border: "none",
					borderRadius: "8px",
					cursor: "pointer",
				}}
			>					
				{isLoggedIn ? "Logout" : "Login"}
			</button>
			{/* Conditional rendering using logical AND (&&) */}
			{isLoggedIn && (
			<p style={{ marginTop: "20px" }}>
				You have access to premium content.
			</p>
		  )}
		</div>
	);
}

export default ConditionalRenderingDemo;
```

**Expected Output**:

Initial State
```text
Conditional Rendering Example

Please log in to continue.

[ Login ]
```

After Clicking Login
```
Conditional Rendering Example 

Welcome back, User! 

[ Logout ] 

You have access to premium content.
```

After Clicking Logout
```
Conditional Rendering Example

Please log in to continue.

[ Login ]
```

**Result**:
The program was executed successfully, and different UI elements were rendered conditionally using the **ternary operator** and the **logical AND (`&&`) operator** based on the application's state.

**Viva Questions**
1. What is conditional rendering in React?
2. Why is the `useState` Hook used in this program?
3. What is the purpose of the ternary operator in JSX?
4. Can `if...else` statements be written directly inside JSX? Why?
5. What is the difference between the ternary operator and the logical AND (`&&`) operator?
6. How does React update the user interface when the state changes?
7. What happens if a React component returns `null`?
8. When should you use `&&` instead of the ternary operator?
9. Can you conditionally render an entire React component? Explain with an example.
10. What are the advantages of conditional rendering in React?

### b. Rendering Lists in React

**Aim**
To understand and implement **list rendering** in React using the `map()` function and the `key` prop.

**Software Requirements**'
- Visual Studio Code
- Node.js (LTS Version)
- React (using Vite or Create React App)

**Procedure**
1. Create a React project using **Vite** or **Create React App**.
2. Open the project in Visual Studio Code.
3. Open the `src/App.jsx` (Vite) or `src/App.js` (Create React App) file.
4. Create an array of student objects containing details such as ID, name, age, and course.
5. Use the `map()` function to iterate through the array and generate JSX elements.
6. Assign a unique `key` prop to each rendered list item.
7. Save the file and run the application using:
```shell
npm run dev
```
8. Observe the rendered list of students in the browser

**Program**:
```jsx
function StudentList() {
  // Array of student objects
  const students = [
    { id: 1, name: "Rahul", age: 20, course: "Computer Science" },
    { id: 2, name: "Priya", age: 21, course: "Electronics" },
    { id: 3, name: "Arjun", age: 22, course: "Mechanical" },
    { id: 4, name: "Sneha", age: 19, course: "Civil" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Student List</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((student) => (
          <li
            key={student.id}
            style={{
              margin: "10px auto",
              padding: "10px",
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
```

**Expected Output**

```
Student List

Rahul
Age: 20
Course: Computer Science

Priya
Age: 21
Course: Electronics

Arjun
Age: 22
Course: Mechanical

Sneha
Age: 19
Course: Civil
```

The browser displays the list as four styled student cards.

**Result**
The program was executed successfully, and the student data was rendered dynamically using the `map()` function with unique `key` props for each list item.

**Viva Questions**
1. What is list rendering in React?
2. Why is the `map()` function commonly used for rendering lists?
3. What is the purpose of the `key` prop in React?
4. What happens if a unique `key` prop is not provided?
5. Why is using the array index as a `key` generally not recommended?
6. What is the difference between `map()` and `forEach()`?
7. Can you render a list of React components instead of HTML elements? Explain.
8. How can you render a list of objects containing multiple properties?
9. What are the advantages of dynamic list rendering over manually writing repeated JSX?
10. How does React use the `key` prop during the reconciliation process?

### c.Write a program for Working with Different Form Fields Using React Forms

**Aim**:
To understand and implement **controlled forms** in React by handling different form fields using the `useState` Hook.

**Software Requirements**
- Visual Studio Code
- Node.js (LTS Version)
- React (using Vite or Create React App)

**Procedure**
1. Create a React project using **Vite** or **Create React App**.
2. Open the project in Visual Studio Code.
3. Open the `src/App.jsx` (Vite) or `src/App.js` (Create React App) file.
4. Import the `useState` Hook from React.
5. Create a state object to store the values of different form fields.
6. Implement a common `handleChange()` function to update the state whenever the user modifies a form field.
7. Bind each form field to the state using the `value` or `checked` attribute.
8. Handle form submission using the `handleSubmit()` function and prevent the default page reload using `event.preventDefault()`.
9. Display the submitted form data after successful submission.
10. Save the file and run the application using:
```shell
npm run dev
```
11. Observe the output in the browser.

**Program**
```jsx
import { useState } from "react";

function App() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		gender: "",
		course: "Computer Science",
		agree: false,
		comments: "",
	});
	
	const [submittedData, setSubmittedData] = useState(null);
	
	const handleChange = (event) => {
	const { name, value, type, checked } = event.target;
	
	setFormData({
		  ...formData,
		  [name]: type === "checkbox" ? checked : value,
		});
	};
	
	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmittedData(formData);
	};
	
	return (
		<div style={{ width: "450px", margin: "30px auto", fontFamily: "Arial" }}>
			<h2>React Forms Example</h2>
		
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<br />
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</label>
				<br />
				<br />
			
				<label>
					Email:
					<br />
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</label>
				<br />
				<br />
				<label>Gender:</label>
				<br />
				<input
				  type="radio"
				  name="gender"
				  value="Male"
				  checked={formData.gender === "Male"}
				  onChange={handleChange}
				/>
				Male
				<input
				  type="radio"
				  name="gender"
				  value="Female"
				  checked={formData.gender === "Female"}
				  onChange={handleChange}
				  style={{ marginLeft: "15px" }}
				/>
				Female
				<br />
				<br />
				<label>
					Course:
					<br />
					<select
						name="course"
						value={formData.course}
						onChange={handleChange}
				>		
						<option>Computer Science</option>
						<option>Electronics</option>
						<option>Mechanical</option>
						<option>Civil</option>
					</select>
				</label>
			
				<br />
				<br />
			
				<label>
					Comments:
					<br />
					<textarea
						name="comments"
						rows="4"
						cols="35"
						value={formData.comments}
						onChange={handleChange}
				>	</textarea>
				</label>
				<br />
				<br />
				
				<label>
					<input
						type="checkbox"
						name="agree"
						checked={formData.agree}
						onChange={handleChange}
					/>
					I agree to the terms and conditions.
				</label>
				<br />
				<br />
						
				<button type="submit">Submit</button>
			</form>
		
			{
			  submittedData && (
				<div
					style={{
						marginTop: "25px",
						padding: "15px",
						border: "1px solid #ccc",
						borderRadius: "8px",
					  }}
				>
					<h3>Submitted Details</h3>
					<p><strong>Name:</strong> {submittedData.name}</p>
					<p><strong>Email:</strong> {submittedData.email}</p>
					<p><strong>Gender:</strong> {submittedData.gender}</p>
					<p><strong>Course:</strong> {submittedData.course}</p>
					<p><strong>Comments:</strong> {submittedData.comments}</p>
					<p>
						<strong>Agreement:</strong>{" "}
						{submittedData.agree ? "Accepted" : "Not Accepted"}
					</p>
				</div>
			)}
		</div>
	);
}

export default App;
```

**Expected Output**:

**Initial Form**
```
React Forms Example

Name:      __________________

Email:     __________________

Gender:    ( ) Male   ( ) Female

Course:    [Computer Science ▼]

Comments:
____________________________
____________________________

☐ I agree to the terms and conditions.

        [ Submit ]
```

After Clicking **Submit**
```
Submitted Details

Name: Rahul

Email: rahul@example.com

Gender: Male

Course: Computer Science

Comments: Interested in React.

Agreement: Accepted
```

**Result**:
The program was executed successfully, and different form fields were handled using **controlled components** in React. User input was stored in the component state and displayed dynamically after form submission.

**Viva Questions**
1. What is a controlled component in React?
2. Why is the `useState` Hook used in React forms?
3. What is the purpose of the `onChange` event?
4. Why is `event.preventDefault()` used during form submission?
5. What is the difference between controlled and uncontrolled components?
6. How can a single `handleChange()` function manage multiple form fields?
7. What is the difference between the `value` and `checked` attributes?
8. How are radio buttons and checkboxes handled differently in React?
9. What is the purpose of storing form data in a state object?
10. How does React update the UI when form data changes?

