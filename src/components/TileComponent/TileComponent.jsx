import React from "react";
import styles from "./TileComponent.module.css";

export default function TileComponent({ value }) {
	const colorTable = {
		0: ["#BDAC97", "#776e65"],
		2: ["#eee4da", "#776e65"],
		4: ["#ede0c8", "#776e65"],
		8: ["#f2b179", "#f9f6f2"],
		16: ["#f59563", "#f9f6f2"],
		32: ["#f67c5f", "#f9f6f2"],
		64: ["#f65e3b", "#f9f6f2"],
		128: ["#edcf72", "#f9f6f2"],
		256: ["#edcc61", "#f9f6f2"],
		512: ["#edc850", "#f9f6f2"],
		1024: ["#edc53f", "#f9f6f2"],
		2048: ["#edc22e", "#f9f6f2"],
	};
	return (
		<div
			className={`${styles.tileComponent} ${
				value > 0 && styles.occupied
			}`}
			style={{
				backgroundColor: colorTable[value][0],
				color: colorTable[value][1],
			}}
		>
			{value > 0 && value}
		</div>
	);
}
