import React from "react";

function Piece() {
	return (
		<div className="relative p-4">
			<div className="h-8 w-2 bg-blue-400 rounded-lg absolute -rotate-45"></div>
			<div className="h-8 w-2 bg-blue-400 rounded-lg absolute rotate-45"></div>
		</div>
	);
}

export default Piece;
