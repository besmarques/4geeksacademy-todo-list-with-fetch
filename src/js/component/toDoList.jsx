import React, { useState } from "react";

const MyToDoList = () => {
	let [toDoList, setToDoList] = useState(["foo", "fooo"]);

	return (
		<>
			<form>
				<label>
					<input
						type="text"
						value={value}
						onChange={(e) => e.value}
					/>
					<input
						type="submit"
						onClick={() => setToDoList([...toDoList, value])}
					/>
				</label>
			</form>

			<ul>
				{toDoList.map((listEntry, i) => (
					<li key={i}>{listEntry}</li>
				))}
			</ul>
		</>
	);
};

export default MyToDoList;
