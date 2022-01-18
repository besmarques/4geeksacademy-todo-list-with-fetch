import React, { useState } from "react";

const MyCounter = () => {
	//HOOKS
	let [count, setCount] = useState(0);
	//LOGIC
	//setCount(count++);
	//JSX
	return (
		<>
			<div>
				<h1>Hello World</h1>
				<p>counter is at {count}</p>
				<button
					onClick={() => {
						setCount(count + 1);
					}}>
					add 1
				</button>
			</div>
		</>
	);
};

export default MyCounter;
