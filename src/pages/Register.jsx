import React, { useState } from "react";
import axios from "axios";
import CustomInput from "../elements/custom-input/CustomInput";
import Button from "../elements/custom-button/Button";
import { Link } from "react-router-dom";

function Register() {
	const [name, setName] = useState("");
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	const nameChange = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	const userNameChange = (e) => {
		setUserName(e.target.value);
		setSubmitted(false);
	};
	const emailChange = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};
	const passwordChange = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === "" || userName === "" || email === "" || password === "") {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
			axios
				.post("http://localhost:3002/user", {
					name,
					userName,
					email,
					password,
				})
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	};

	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? "" : "none",
				}}>
				<Button
					className="bg-green-400 text-white py-5"
					btnText="Congratulations!!! Account created."
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
					className="bg-red-600 text-white py-5"
					btnText="Please Enter all the fields"
				/>
			</div>
		);
	};

	return (
		<div className="text-black p-6">
			<div className="h-4 w-4 border-r-0 border-b-0 border-2 border-black -rotate-45 mb-10"></div>
			<h3 className="font-semibold mb-4">Create account</h3>
			<h1 className="text-3xl font-semibold">Let’s get to know you better!</h1>
			<form>
				<CustomInput
					id="name"
					containerClass="mt-4"
					label="Your name"
					inputChange={nameChange}
					type="text"
					required
				/>
				<CustomInput
					id="username"
					containerClass="mt-4"
					label="Username"
					inputChange={userNameChange}
					type="text"
					required
				/>
				<CustomInput
					id="email"
					containerClass="mt-4"
					type="email"
					label="Email"
					inputChange={emailChange}
					required
				/>
				<CustomInput
					id="password"
					type="password"
					containerClass="mt-4"
					label="Password"
					inputChange={passwordChange}
					required
				/>
				<div className="mt-8">
					{errorMessage()}
					{successMessage()}
				</div>
				<Button
					type="submit"
					onClick={handleSubmit}
					className={
						submitted ? "bg-gray-400 mt-16 py-5" : "mt-16 py-5 bg-yellow-300"
					}
					btnText="Register"
				/>
			</form>
			<p className="text-center text-sm mt-4">
				Already have an account?
				<Link to="/login">
					<span className="text-yellow-300 font-bold text-lg">Login</span>
				</Link>
			</p>
		</div>
	);
}

export default Register;
