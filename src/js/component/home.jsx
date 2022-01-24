import React from "react";

//include images into your bundle

import MyToDoList from "./toDoList.jsx";
import MyCounter from "./counter.jsx";
import MyTestesApp from "./teste.jsx";
import List from "./listsolve3.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<div className="container mt-5">
				<div className="row d-flex justify-content-center">
					<div className="col-4 card bg-light bg-gradient border border-dark shadow rounded">
						<h2 className="text-center text-primary mt-4 mb-4">
							<i className="fas fa-list"></i> My List
						</h2>
						{/*<MyToDoList />*/}
						{/*<MyTestesApp />*/}
						<List />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
