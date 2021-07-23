import React from "react";

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
			<button onClick={completeHandler} className="complete-btn"></button>
			<button onClick={deletehandler} className="trash-btn"></button>
		</div>
	);
}

export default Todo;
