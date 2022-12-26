import React from "react";
import Button from "../elements/custom-button/Button";
import { useNavigate } from "react-router-dom";

function NewUser() {
	const navigate = useNavigate();
	function handleRoute() {
		navigate("/game");
	}
	return (
		<div className="sm:hidden text-black p-6">
			<h1 className="text-3xl font-semibold">Your Games</h1>
			<p className="text-center mt-40 mb-6">No Games Found</p>
			<Button
				onClick={handleRoute}
				className="mt-16 py-5 bg-yellow-300"
				btnText="Start a new game"
			/>
		</div>
	);
}

export default NewUser;
