import React, { useState } from "react";
import Button from "../../elements/custom-button/Button";
import CustomInput from "../../elements/custom-input/CustomInput";
import axios from "axios";

function Login() {
	const [name, setName] = useState("");
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	const userNameValue = (e) => {
		setUserName(e.target.value);
		setSubmitted(false);
	};

	const passwordValue = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.get("http://localhost:3002/user")
			.then(function (response) {
				response.data.map((user) => {
					try {
						if (user.userName === userName && user.password === password) {
							console.log("success");
						}
					} catch (error) {
						setError(true);
						console.log(error);
					}
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? "" : "none",
				}}>
				<Button
					className="bg-green-400 text-white"
					btnText="Succesfully LoggedIn."
				/>
			</div>
		);
	};
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? "" : "none",
				}}>
				<Button
					className="bg-red-500 text-white"
					btnText="Please Enter all the fields"
				/>
			</div>
		);
	};
	return (
		<div className="sm:hidden text-black p-6">
			<div className="h-4 w-4 border-r-0 border-b-0 border-2 border-black -rotate-45 mb-10"></div>
			<h3 className="font-semibold mb-4">Login</h3>
			<h1 className="text-3xl font-semibold">Please enter your details</h1>
			<form>
				<CustomInput
					inputChange={userNameValue}
					required
					containerClass="mt-4"
					label="Username"
				/>
				<CustomInput
					inputChange={passwordValue}
					required
					containerClass="mt-4"
					label="Password"
				/>
				<div>
					{successMessage()}
					{errorMessage()}
				</div>
				<Button
					type="submit"
					onClick={handleSubmit}
					className="mt-16"
					btnText="Login"
				/>
			</form>
		</div>
	);
}

export default Login;
