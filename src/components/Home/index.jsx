import React from "react";
import Card from "../Card";

function GamesList() {
	return (
		<div className="py-6 px-4">
			<h1 className="text-3xl font-semibold mb-6">Your Games</h1>
			<div className="grid grid-flow-row gap-4">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

export default GamesList;
