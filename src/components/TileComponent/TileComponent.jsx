import React from "react";
import styles from "./TileComponent.module.css";

export default function TileComponent({ isOccupied = false, value }) {
	return (
		<div
			className={`${styles.tileComponent} ${
				isOccupied && styles.occupied
			}`}
		>
			{value}
		</div>
	);
}
