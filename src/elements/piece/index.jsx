import React, { useState } from "react";

function Piece() {
	const [playerOne, setplayerOne] = useState(false);
	return (
		<>
			{playerOne ? (
				<div className="relative p-4">
					<div className="h-12 w-2 bg-blue-400 rounded-lg absolute -rotate-45"></div>
					<div className="h-12 w-2 bg-blue-400 rounded-lg absolute rotate-45"></div>
				</div>
			) : (
				<div className="relative w-12 h-12 border-8 border-red-500 rounded-full"></div>
			)}
		</>
	);
}

export default Piece;
