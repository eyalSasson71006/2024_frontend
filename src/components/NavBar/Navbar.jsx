import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { addRandomTile } from "../../helpers/gameLogic";

export default function Navbar({ grid, setGrid }) {
	function calculateScore() {
		let sum = 0;
		grid.forEach((row) => {
			row.forEach((tile) => {
				sum += tile;
			});
		});
		return sum;
	}

	function resetBoard() {
		if (confirm("Are you sure you want to reset the board?")) {
			setGrid([
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
			]);
			setGrid((grid) => addRandomTile(grid));
			setGrid((grid) => addRandomTile(grid));
		}
	}

	return (
		<nav>
			<h1 className={styles.navBar_title}>2024</h1>
			<div className={styles.navBar_stats}>
				<div className={styles.navBar_score}>
					<p>Score:</p>
					<p>{calculateScore()}</p>
				</div>
			</div>
			<button onClick={resetBoard}>New Game</button>
		</nav>
	);
}
