import React, { useEffect, useState } from "react";
import styles from "./MainPage.module.css";
import Navbar from "../../components/NavBar/Navbar";
import GameComponent from "../../components/GameComponent/GameComponent";
import { addRandomTile, checkLose, checkWin } from "../../helpers/gameLogic";

export default function MainPage() {
	const [grid, setGrid] = useState([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	]);

	useEffect(() => {
		if (checkLose(grid)) {
			alert("You lose!");
			resetBoard();
		}
		if (checkWin(grid)) {
			alert("You Win!");
			resetBoard();
		}
	}, [grid]);

	function resetBoard() {
		setGrid([
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		]);
		setGrid((grid) => addRandomTile(grid));
		setGrid((grid) => addRandomTile(grid));
	}

	return (
		<div className={styles.MainPage}>
			<Navbar grid={grid} setGrid={setGrid} resetBoard={resetBoard} />
			<GameComponent grid={grid} setGrid={setGrid} />
		</div>
	);
}
