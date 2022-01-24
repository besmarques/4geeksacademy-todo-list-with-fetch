import React, { useState, useEffect } from "react";

const MyToDoList = () => {
	let [toDoList, setToDoList] = useState([]);
	let [formValue, setFormValue] = useState("");

	let apiObject = [];

	useEffect(() => {
		fetchList();

		console.log("todolist" + toDoList);
	});

	function localToCloud() {
		for (let zxc = 0; zxc < toDoList.length; zxc++) {
			apiObject[zxc] = {
				label: toDoList[zxc],
				done: false,
			};
		}

		//console.log(apiObject);

		fetch("https://assets.breatheco.de/apis/fake/todos/user/besmarques", {
			method: "PUT",
			body: JSON.stringify(apiObject),
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		setFormValue("");
		localToCloud();
	}

	function removeItem(i) {
		let temp = [...toDoList];

		temp.splice(i, 1);

		setToDoList(temp);

		//localToCloud();
	}

	function myCreateusername() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/besmarques", {
			method: "DELETE",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	function fetchList() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/besmarques", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				//console.log("response ok " + resp.ok); // will be true if the response is successfull
				//console.log("response status " + resp.status); // the status code = 200 or code = 400 etc.
				//console.log("response text " + resp.text()); // will try return the exact result as string
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then((data) => {
				//here is were your code should start after the fetch finishes
				//console.log("response data " + data); //this will print on the console the exact object received from the server
				document.getElementById("showfetch").innerHTML =
					JSON.stringify(data);

				let fetchObject = data;

				for (let cxz = 0; cxz < data.length; cxz++) {
					toDoList[cxz] = fetchObject[cxz].label;
				}

				console.log("fetchlist toDoList var = " + toDoList);

				showToDoList();
			});

		//document.getElementById("showfetch").innerHTML = data;
	}

	function showToDoList() {
		console.log("showtodolist toDoList var = " + toDoList);
		return toDoList.map((listEntry, i) => (
			<>
				<div class="d-flex justify-content-between mt-2 mb-2 ">
					<div
						key={i}
						class="col-10 bg-light bg-gradient pt-1 pb-1 ps-2 pe-2 border-bottom border-secondary">
						{listEntry}
					</div>
					<div class="col-1 me-2">
						<button
							class="btn btn-danger"
							onClick={() => removeItem(i)}>
							<i class="fas fa-minus-circle"></i>
						</button>
					</div>
				</div>
			</>
		));
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
				class="form-inline d-flex mt-2 mb-2 justify-content-between">
				<div class="form-group col-10">
					<input
						class="form-control"
						value={formValue}
						type="text"
						onChange={(e) => setFormValue(e.target.value)}
					/>
				</div>
				<div class="form-group">
					<button
						class="btn btn-primary"
						type="submit"
						onClick={() =>
							setToDoList((prevState) => [
								...prevState,
								formValue,
							])
						}>
						<i class="fas fa-plus-circle"></i>
					</button>
				</div>
			</form>

			{showToDoList()}
			{myCreateusername()}

			<button className="btn btn-danger" onClick={fetchList}>
				Fetch
			</button>
			<div id="showfetch"></div>
		</>
	);
};

export default MyToDoList;
