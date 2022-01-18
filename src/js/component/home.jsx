import React from "react";

//include images into your bundle

import MyToDoList from "./toDoList.jsx";
import MyCounter from "./counter.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<div>
				<MyCounter />
			</div>
			<div>
				<MyToDoList />
			</div>
		</>
	);
};

export default Home;
