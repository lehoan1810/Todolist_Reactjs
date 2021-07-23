import React from "react";

import "../App.css";
function Form({ setInputText, setTodos, todos, inputText, setStatus }) {
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, complete: false, id: Math.random() * 1000 },
		]);
		setInputText("");
	};
	const statusHandler = (e) => {
		setStatus(e.target.value);
	};

	return (
		<form>
			<input
				value={inputText}
				onChange={inputTextHandler}
				type="text"
				className="todo-input"
			/>
			<button
				onClick={submitHandler}
				className="todo-button"
				type="submit"
			></button>
			<div className="select">
				<select onChange={statusHandler} name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">completed</option>
					<option value="uncompleted">uncompleted</option>
				</select>
			</div>
		</form>
	);
}

export default Form;
