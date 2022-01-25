import React, { useState, useEffect } from "react";

const List = () => {
	const url = "https://assets.breatheco.de/apis/fake/todos/user/besmarques";
	let [toDoList, setToDoList] = useState([]);
	let ToDoWorkingVar = [];
	let vardsa = "";

	/*fetch("https://assets.breatheco.de/apis/fake/todos/user/besmarques", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	})
		.then((resp) => {
			return resp.json();
		})
		.then((data) => {
			vardsa = JSON.stringify(data);
			console.log(vardsa);
			return vardsa;
		});*/

	useEffect(() => {
		console.log("yeah");
	}, [toDoList]);

	function addToDoList() {
		setToDoList((prevState) => [...prevState, "added 1"]);
	}

	function deleteFromToDoList() {
		let temp = [...toDoList];

		temp.splice(0, 1);

		setToDoList(temp);
	}

	return (
		<>
			<div>{toDoList}</div>

			<button onClick={() => addToDoList()}>add to do list</button>

			<button onClick={() => deleteFromToDoList()}>
				remove to do list
			</button>
		</>
	);
};
export default List;
