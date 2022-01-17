import React from "react";

//include images into your bundle

import MyToDoList from "./toDoList.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<MyToDoList />
		</div>
	);
};

export default Home;
