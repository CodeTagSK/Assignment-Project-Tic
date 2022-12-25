import React from "react";
import Button from "../../elements/custom-button/Button";
import CustomInput from "../../elements/custom-input/CustomInput";

function NewUser() {
	return (
		<div className="sm:hidden text-black p-6">
			<h1 className="text-3xl font-semibold">Your Games</h1>
			<p className="text-center mt-40 mb-6">No Games Found</p>
			<Button className="mt-16" btnText="Start a new game" />
		</div>
	);
}

export default NewUser;
