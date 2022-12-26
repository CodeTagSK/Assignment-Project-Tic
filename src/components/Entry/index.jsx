import React from "react";
import Button from "../../elements/custom-button/Button";

function Entry() {
	return (
		<div className="sm:hidden p-4 grid grid-rows-2 place-items-center h-auto">
			<h2 className="text-black text-4xl pt-40 pb-3">async</h2>
			<h1 className="text-8xl text-center">tic tac toe</h1>
			<Button className="shadow-lg mt-40 py-5" btnText="Login" />
			<Button className="bg-blue-500 mt-10 shadow-lg py-5" btnText="Register" />
		</div>
	);
}

export default Entry;
