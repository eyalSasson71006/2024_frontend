import React from 'react'
import styles from "./GameComponent.module.css"
import TileComponent from '../TileComponent/TileComponent';

export default function GameComponent() {
  return (
    <div className={styles.gameComponent_container}>
        <div className={styles.gameComponent}>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
            <TileComponent/>
        </div>
    </div>
  )
}
