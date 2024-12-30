import React, { useState } from "react";
import styles from "./NavBar.module.css";

export default function Navbar({ grid, setGrid }) {
	const [score, setScore] = useState(0);

	function calculateScore() {
		let sum = 0;
		grid.forEach((row) => {
			row.forEach((tile) => {
				sum += tile;
			});
		});
		return sum;
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
			<button>New Game</button>
		</nav>
	);
}
