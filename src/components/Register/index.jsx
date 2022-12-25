import React from "react";
import Button from "../../elements/custom-button/Button";
import CustomInput from "../../elements/custom-input/CustomInput";

function Register() {
	return (
		<div className="sm:hidden text-black p-6">
			<div className="h-4 w-4 border-r-0 border-b-0 border-2 border-black -rotate-45 mb-10"></div>
			<h3 className="font-semibold mb-4">Create account</h3>
			<h1 className="text-3xl font-semibold">Let’s get to know you better!</h1>
			<CustomInput containerClass="mt-4" label="Your name" />
			<CustomInput containerClass="mt-4" label="Username" />
			<CustomInput containerClass="mt-4" label="Email" />
			<CustomInput containerClass="mt-4" label="Password" />
			<Button className="mt-16" btnText="Register" />
		</div>
	);
}

export default Register;
