import React, { useState } from "react";
import styles from "./MainPage.module.css";
import Navbar from "../../components/NavBar/Navbar";
import GameComponent from "../../components/GameComponent/GameComponent";

export default function MainPage() {
	const [grid, setGrid] = useState([
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	]);

	return (
		<div className={styles.MainPage}>
			<Navbar grid={grid} setGrid={setGrid}/>
			<GameComponent grid={grid} setGrid={setGrid}/>
		</div>
	);
}
