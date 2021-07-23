/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import checked from "../image/checked.png";
import dlete from "../image/delete.png";

function Todo({ text, setTodos, todos, todo }) {
	const deletehandler = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};
	//true -> delete
	const completeHandler = () => {
		setTodos(
			// eslint-disable-next-line array-callback-return
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						complete: !item.complete,
					};
				}
				return item;
			})
		);
	};

	return (
		<div className="todo">
			<li className={`todo-item ${todo.complete ? "completed" : ""}`}>
				{text}
			</li>
			<button onClick={completeHandler} className="complete-btn">
				<img className="btn-img" src={checked} />
			</button>
			<button onClick={deletehandler} className="trash-btn">
				<img className="btn-img" src={dlete} />
			</button>
		</div>
	);
}

export default Todo;
