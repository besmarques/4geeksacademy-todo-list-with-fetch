import React from "react";

const ListInHTML = () => {
	let listArray = ["one", "two", "three", "four"];

	const finalLista = listArray.map((listEntry, i) => {
		return <li key={i}>{listEntry}</li>;
	});

	return <ul>{finalLista}</ul>;
};

export default ListInHTML;
