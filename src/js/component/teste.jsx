import React, { useState, useEffect } from "react";

const MyTestesApp = () => {
	const url = "https://assets.breatheco.de/apis/fake/todos/user/besmarques";
	let ToDoWorkingVar = [];
	let apiObject = [];
	let [toDoList, setToDoList] = useState([]);
	let [formValue, setFormValue] = useState("");

	useEffect(() => getDataFromCloud(), []);

	function getDataFromCloud() {
		fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				if (resp.ok) {
					return resp.json();
				} else {
					myCreateUsername();
				}
			})
			.then((data) => {
				JSON.stringify(data);
				return data;
			})
			.then((data) => {
				for (let i = 0; i < data.length; i++) {
					ToDoWorkingVar[i] = data[i].label;
				}
				setToDoList(ToDoWorkingVar);
			});
		console.log(toDoList);
	}

	function myCreateUsername() {
		fetch(url, {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	function localToCloud() {
		console.log("localToCloud function todolist " + toDoList);
		for (let zxc = 0; zxc < toDoList.length; zxc++) {
			apiObject[zxc] = {
				label: toDoList[zxc],
				done: false,
			};
		}

		console.log("apiobject " + JSON.stringify(apiObject));

		fetch(url, {
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

	function deleteFromCloud() {
		fetch(url, {
			method: "DELETE",
		});
		setToDoList([]);
	}

	function removeItem(i) {
		let temp = [...toDoList];

		temp.splice(i, 1);

		setToDoList(temp);
		console.log("remove item function temp " + temp);
		console.log("remove item function toDoList " + toDoList);

		localToCloud();
	}

	function createForm() {
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
			</>
		);
	}

	//show the list of ToDo's
	function showToDoList() {
		return toDoList.map((listEntry, i) => (
			<>
				<div class="d-flex justify-content-between mt-2 mb-2 ">
					<div
						key={i}
						class="col-10 bg-light bg-gradient pt-1 pb-1 ps-2 pe-2 border-bottom border-secondary">
						<b>{i + 1}</b> - {listEntry}
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

	function showDelete() {
		return (
			<>
				<div className="">
					<button
						className="btn btn-danger"
						onClick={() => deleteFromCloud()}>
						delete
					</button>
				</div>
			</>
		);
	}

	return (
		<>
			{createForm()}
			{showToDoList()}
			{showDelete()}
		</>
	);
};

export default MyTestesApp;
