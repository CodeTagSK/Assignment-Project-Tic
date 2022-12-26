import React from "react";
import Card from "../components/Card";
import Button from "../elements/custom-button/Button";
import { Link, useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	const playNewGame = () => {
		navigate("/new-game");
	};
	return (
		<div className="py-6 px-4 relative">
			<h1 className="text-3xl font-semibold mb-6">Your Games</h1>
			<div className="grid grid-flow-row gap-4">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Button
					onClick={playNewGame}
					btnText="+ New Game"
					className="absolute bottom-20 right-10 !bg-black !w-32 !py-3 text-sm"
				/>
			</div>
		</div>
	);
}

export default Home;
