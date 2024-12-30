import React, { useEffect, useRef, useState } from "react";
import styles from "./GameComponent.module.css";
import TileComponent from "../TileComponent/TileComponent";
import { moveLeft, moveRight, moveDown, moveUp } from "../../helpers/gameLogic";

export default function GameComponent() {
	const [grid, setGrid] = useState([
		[2, 2, 4, 2],
		[4, 4, 4, 2],
		[4, 4, 4, 8],
		[2, 2, 2, 2],
	]);

	useEffect(() => {
		function handleClick(e) {
			if (e.key === "ArrowLeft") {
				setGrid((grid) => moveLeft(grid));
			} else if (e.key === "ArrowRight") {
				setGrid((grid) => moveRight(grid));
			} else if (e.key === "ArrowUp") {
                setGrid((grid) => moveUp(grid));
			} else if (e.key === "ArrowDown") {
				setGrid((grid) => moveDown(grid));
			}
		}

		window.addEventListener("keydown", handleClick);

		return () => {
			window.removeEventListener("keydown", handleClick);
		};
	}, []);
	console.log(grid);

	return (
		<div className={styles.gameComponent_container}>
			<div className={styles.gameComponent}>
				{grid.map((row, rowIndex) =>
					row.map((tile, colIndex) => (
						<TileComponent key={rowIndex + colIndex} value={tile} />
					))
				)}
			</div>
		</div>
	);
}
