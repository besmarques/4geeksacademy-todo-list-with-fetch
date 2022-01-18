import React, { useState } from "react";

const MyToDoList = () => {
	let [toDoList, setToDoList] = useState([]);
	let [formValue, setFormValue] = useState("");
	//let onChangeValue = "";

	function handleSubmit(event) {
		event.preventDefault();
		setFormValue("");
	}

	function removeItem(i) {
		let temp = [...toDoList];

		temp.splice(i, 1);

		setToDoList(temp);
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
						Add
					</button>
				</div>
			</form>

			{toDoList.map((listEntry, i) => (
				<div class="card mt-2 mb-2">
					<div class="row mt-2 mb-2 d-flex justify-content-center">
						<div key={i} class="col-10">
							{listEntry}
						</div>
						<div class="col-1">
							<button
								class="delete"
								onClick={() => removeItem(i)}>
								<i class="fas fa-minus-circle"></i>
							</button>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default MyToDoList;
