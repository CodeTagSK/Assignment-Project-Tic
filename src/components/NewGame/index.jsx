import React from "react";
import Button from "../../elements/custom-button/Button";
import CustomInput from "../../elements/custom-input/CustomInput";

function NewGame() {
	return (
		<div className="sm:hidden text-black p-6">
			<div className="h-4 w-4 border-r-0 border-b-0 border-2 border-black -rotate-45 mb-10"></div>
			<h3 className="font-semibold mb-4">NewGame</h3>
			<h1 className="text-3xl font-semibold">Whom do you want to play with?</h1>

			<CustomInput containerClass="mt-4" label="Email" />
			<Button className="mt-16" btnText="Start game" />
		</div>
	);
}

export default NewGame;
