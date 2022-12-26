import { useState, useEffect, useRef } from "react";
import Button from "../elements/custom-button/Button";
import Piece from "../elements/piece";

function GameBoard() {
	const [turn, setTurn] = useState(0);
	const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
	const boardRef = useRef(null);
	const [reset, setReset] = useState(false);
	const [winner, setWinner] = useState("");

	const resetBoard = () => {
		setReset(true);
	};

	const draw = (event, index) => {
		if (data[index - 1] === "" && winner === "") {
			const current = turn === 0 ? "X" : "O";
			data[index - 1] = current;
			event.target.innerText = current;
			setTurn(turn === 0 ? 1 : 0);
		}
	};

	useEffect(() => {
		setData(["", "", "", "", "", "", "", "", ""]);

		const cells = boardRef.current.children;

		for (let i = 0; i < 9; i++) {
			cells[i].innerText = "";
		}

		setTurn(0);

		setWinner("");
		setReset(false);
	}, [reset, setReset, setWinner]);

	useEffect(() => {
		const checkRow = () => {
			let ans = false;
			for (let i = 0; i < 9; i += 3) {
				ans |=
					data[i] === data[i + 1] && data[i] === data[i + 2] && data[i] !== "";
			}
			return ans;
		};
		const checkCol = () => {
			let ans = false;
			for (let i = 0; i < 3; i++) {
				ans |=
					data[i] === data[i + 3] && data[i] === data[i + 6] && data[i] !== "";
			}
			return ans;
		};
		const checkDiagonal = () => {
			return (
				(data[0] === data[4] && data[0] === data[8] && data[0] !== "") ||
				(data[2] === data[4] && data[2] === data[6] && data[2] !== "")
			);
		};
		const checkWin = () => {
			return checkRow() || checkCol() || checkDiagonal();
		};
		const checkTie = () => {
			let count = 0;
			data.forEach((cell) => {
				if (cell !== "") {
					count++;
				}
			});
			return count === 9;
		};
		if (checkWin()) {
			setWinner(turn === 0 ? "Player 2 Wins!" : "Player 1 Wins!");
		} else if (checkTie()) {
			setWinner("It's a Tie!");
		}
	});

	return (
		<div className="text-black p-6">
			<div className="h-4 w-4 border-r-0 border-b-0 border-2 border-black -rotate-45 mb-10"></div>
			<h1 className="text-3xl font-semibold mb-2">Game with tanmay</h1>
			<p className="mb-2 text-sm">your piece</p>
			<div className="mb-8">
				<Piece />
			</div>
			<div className="bg-yellow-200 p-4 text-center">
				{winner ? winner : "your move"}
			</div>
			<div ref={boardRef} className="h-72 grid grid-cols-3">
				<div
					onClick={(e) => draw(e, 1)}
					className="grid place-items-center border-b-8 border-r-8 border-yellow-200 h-32"></div>
				<div
					onClick={(e) => draw(e, 2)}
					className="grid place-items-center border-r-8 border-b-8 border-yellow-200 h-32"></div>
				<div
					onClick={(e) => draw(e, 3)}
					className="grid place-items-center border-b-8 border-yellow-200"></div>

				<div
					onClick={(e) => draw(e, 4)}
					className="grid place-items-center border-r-8 border-b-8 border-yellow-200 h-32"></div>
				<div
					onClick={(e) => draw(e, 5)}
					className="grid place-items-center border-r-8 border-b-8 border-yellow-200 h-32"></div>
				<div
					onClick={(e) => draw(e, 6)}
					className="grid place-items-center  border-b-8 border-yellow-200"></div>

				<div
					onClick={(e) => draw(e, 7)}
					className="grid place-items-center border-r-8 border-yellow-200 h-32"></div>
				<div
					onClick={(e) => draw(e, 8)}
					className="grid place-items-center border-r-8 border-yellow-200 h-32"></div>
				<div
					onClick={(e) => draw(e, 9)}
					className="grid place-items-center"></div>
			</div>

			<Button className="mt-16 py-5" btnText="Submit!" />
		</div>
	);
}

export default GameBoard;
