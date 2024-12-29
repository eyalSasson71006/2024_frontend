import React from "react";
import styles from "./MainPage.module.css";
import Navbar from "../../components/NavBar/Navbar";

export default function MainPage() {
	return (
		<div className={styles.MainPage}>
			<Navbar />
		</div>
	);
}
