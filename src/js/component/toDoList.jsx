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
						<i class="fas fa-plus-circle"></i>
					</button>
				</div>
			</form>

			{toDoList.map((listEntry, i) => (
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
			))}
		</>
	);
};

export default MyToDoList;
