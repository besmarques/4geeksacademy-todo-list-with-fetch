import React, { useState, useEffect } from "react";

const List = () => {
	const url = "https://assets.breatheco.de/apis/fake/todos/user/besmarques";
	let [toDoList, setToDoList] = useState([]);

	function myCreateUsername() {
		fetch(url, {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	function getFromOnline() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/besmarques", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		})
			.then((resp) => {
				if (resp.ok) {
					return resp.json();
				} else {
					myCreateUsername();
				}
			})
			.then((data) => {
				return data;
			})
			.then((treatedData) => {
				let temp = treatedData.map(({ label }) => {
					return label;
				});
				setToDoList(temp);
			});
	}

	function pushToOnline() {
		let temp = toDoList.map((value) => {
			return { label: value, done: false };
		});

		fetch("https://assets.breatheco.de/apis/fake/todos/user/besmarques", {
			method: "PUT",
			body: JSON.stringify(temp),

			headers: { "Content-Type": "application/json" },
		});
	}

	useEffect(() => {
		getFromOnline();
	}, []);

	useEffect(() => {
		pushToOnline();
	}, [toDoList]);

	function addToDoList() {
		setToDoList((prevState) => [...prevState, "added 1"]);
	}

	function deleteFromToDoList() {
		let temp = [...toDoList];

		temp.splice(0, 1);

		setToDoList(temp);
	}

	function deleteAllTasks() {
		setToDoList([]);
		fetch("https://assets.breatheco.de/apis/fake/todos/user/besmarques", {
			method: "DELETE",

			headers: { "Content-Type": "application/json" },
		});
	}

	return (
		<>
			<div>{toDoList}</div>

			<button onClick={() => addToDoList()}>add to do list</button>

			<button onClick={() => deleteFromToDoList()}>
				remove to do list
			</button>

			<button onClick={() => deleteAllTasks()}>delete all</button>
		</>
	);
};
export default List;
