import React from "react";
import Button from "../../elements/custom-button/Button";

const Card = () => {
	return (
		<div className="h-48 shadow-xl rounded-lg w-full p-4 bg-white">
			<h1 className="text-xl font-semibold mb-4">Game with Tanmay</h1>
			<p className="w-52 text-sm mb-4">
				Tanmay just made their move! It’s your turn to play now.
			</p>
			<p className="text-xs mb-4">9th June 2022, 3:15pm</p>
			<Button
				btnText="View game"
				className="py-2 text-sm font-medium bg-yellow-300"
			/>
		</div>
	);
};

export default Card;
