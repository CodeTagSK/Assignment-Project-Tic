import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "./pages/Entry";
import GameBoard from "./pages/GameBoard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewGame from "./pages/NewGame";
import NewUser from "./pages/NewUser";
import Register from "./pages/Register";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Entry />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/new-game" element={<NewGame />}></Route>
				<Route path="/game" element={<GameBoard />}></Route>
				<Route path="/new-user" element={<NewUser />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
