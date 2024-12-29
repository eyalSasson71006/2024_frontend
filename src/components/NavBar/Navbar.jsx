import React from "react";
import styles from "./NavBar.module.css";

export default function Navbar() {
	return (
		<nav>
			<h1 className={styles.navBar_title}>2024</h1>
			<div className={styles.navBar_stats}>
				<div className={styles.navBar_score}>
					<p>Score:</p>
					<p>0</p>
				</div>
				<div className={styles.navBar_score}>
					<p>Best:</p>
					<p>0</p>
				</div>
			</div>
			<button>New Game</button>
		</nav>
	);
}
