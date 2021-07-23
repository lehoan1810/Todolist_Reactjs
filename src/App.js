import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("All");
	const [filteredTodos, setFilterTodos] = useState([]);

	useEffect(() => {
		getLocalTodos();
	}, []);

	useEffect(() => {
		filterHandler();
		saveLocalTodos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [todos, status]);

	const filterHandler = () => {
		// eslint-disable-next-line default-case
		switch (status) {
			case "completed":
				setFilterTodos(todos.filter((todo) => todo.complete === true));
				break;
			case "uncompleted":
				setFilterTodos(todos.filter((todo) => todo.complete === false));
				break;
			default:
				setFilterTodos(todos);
				break;
		}
	};

	//save to local
	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};
	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem("todos"));
			setTodos(todoLocal);
		}
	};
	return (
		<div className="App">
			<header>
				<h1>Demo's Todolist</h1>
			</header>
			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<TodoList
				filteredTodos={filteredTodos}
				setTodos={setTodos}
				todos={todos}
			/>
		</div>
	);
}
export default App;
