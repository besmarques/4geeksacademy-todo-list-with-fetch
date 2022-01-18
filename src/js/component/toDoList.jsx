import React, { useState } from "react";

const MyToDoList = () => {
	let [toDoList, setToDoList] = useState(["teste", "teste23"]);

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					<input />
					<input
						type="submit"
						value="Submit"
						onClick={() =>
							setToDoList((prevState) => [...prevState, "yay"])
						}
					/>
				</label>
			</form>

			<ul>
				{toDoList.map((listEntry, i) => (
					<li key={i}>{listEntry}</li>
				))}
			</ul>
			<h1>{toDoList}</h1>
		</>
	);
};

export default MyToDoList;
