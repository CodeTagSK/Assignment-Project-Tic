import React from "react";
import Button from "../elements/custom-button/Button";
import { Link, useNavigate } from "react-router-dom";

function Entry() {
	let navigate = useNavigate();
	const redirectLogin = () => {
		navigate("/login");
	};
	const redirectRegister = () => {
		navigate("/register");
	};
	return (
		<div className="sm:hidden p-4 grid grid-rows-2 place-items-center h-auto">
			<h2 className="text-black text-4xl pt-40 pb-3">async</h2>
			<h1 className="text-8xl text-center">tic tac toe</h1>

			<Button
				onClick={redirectLogin}
				className="shadow-lg mt-40 py-5 bg-yellow-300"
				btnText="Login"
			/>
			<Button
				onClick={redirectRegister}
				className="!bg-blue-500 mt-10 shadow-lg py-5"
				btnText="Register"
			/>
		</div>
	);
}

export default Entry;
