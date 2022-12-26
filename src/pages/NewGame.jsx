import React, { useState } from "react";
import Button from "../elements/custom-button/Button";
import CustomInput from "../elements/custom-input/CustomInput";
import { useNavigate } from "react-router-dom";

function NewGame() {
	const navigate = useNavigate();
	const [emailValue, setEmailValue] = useState("");
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setEmailValue(e.target.value);
	};
	const toStartGame = () => {
		if (emailValue !== "" && emailValue.includes("@")) navigate("/new-user");
		return setError(true);
	};
	return (
		<div className=" text-black p-6">
			<div className="h-4 w-4 border-r-0 border-b-0 border-2 border-black -rotate-45 mb-10"></div>
			<h3 className="font-semibold mb-4">NewGame</h3>
			<h1 className="text-3xl font-semibold">Whom do you want to play with?</h1>

			<CustomInput
				inputChange={handleChange}
				containerClass="mt-4"
				label="Email"
				type="email"
				required
			/>
			{error && (
				<p className="my-4 text-red-600 text-sm">
					Please Enter Details Correctly
				</p>
			)}
			<Button
				onClick={toStartGame}
				className="mt-16 py-5 bg-yellow-300"
				btnText="Start game"
			/>
		</div>
	);
}

export default NewGame;
