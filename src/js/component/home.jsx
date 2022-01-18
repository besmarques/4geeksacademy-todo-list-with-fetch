import React from "react";

//include images into your bundle

import MyToDoList from "./toDoList.jsx";
import MyCounter from "./counter.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<div class="container mt-5">
				<div class="row d-flex justify-content-center">
					<div class="col-4 card bg-light border border-primary">
						<h2 class="text-center text-primary">My List</h2>
						<MyToDoList />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
