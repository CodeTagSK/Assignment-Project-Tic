import React from "react";
import Button from "../elements/custom-button/Button";
import Piece from "../elements/piece";

function GameBoard() {
	return (
		<div className="sm:hidden text-black p-6">
			<div className="h-4 w-4 border-r-0 border-b-0 border-2 border-black -rotate-45 mb-10"></div>
			<h1 className="text-3xl font-semibold mb-2">Game with tanmay</h1>
			<p className="mb-2 text-sm">your piece</p>
			<div className="mb-8">
				<Piece />
			</div>
			<div className="grid">
				<div className="bg-yellow-200 p-4 text-center">Your move</div>
				<div className="grid grid-rows-3 h-80">
					<div className="grid border-b-8 border-yellow-200 grid-cols-3">
						<div className="grid place-items-center border-r-8 border-yellow-200">
							<Piece />
						</div>
						<div className="border-r-8 border-yellow-200"></div>
						<div className=""></div>
					</div>
					<div className="grid border-b-8 border-yellow-200 grid-cols-3">
						<div className="border-r-8 border-yellow-200"></div>
						<div className="border-r-8 border-yellow-200"></div>
						<div className=""></div>
					</div>
					<div className="grid  grid-cols-3">
						<div className="border-r-8 border-yellow-200"></div>
						<div className="border-r-8 border-yellow-200"></div>
						<div className=""></div>
					</div>
				</div>
			</div>

			<Button className="mt-16 py-5" btnText="Submit!" />
		</div>
	);
}

export default GameBoard;
