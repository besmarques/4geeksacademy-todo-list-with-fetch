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
					<div class="col-4 card bg-light bg-gradient border border-dark shadow rounded">
						<h2 class="text-center text-primary mt-4 mb-4">
							<i class="fas fa-list"></i> My List
						</h2>
						<MyToDoList />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
