import React from "react";
import styles from "./BaristaText.module.css";
import { baristaList } from "./baristaList";

export default function BaristaText({ index }) {
    const barista = baristaList[index];

    return (
        <div className={styles.box}>
            <p className={styles.textNomal}>{barista.position}</p>
            <h2 className={styles.staffName}>{barista.staffName}</h2>
            <p className={styles.textNomal}>{barista.enNotation}</p>
            <p className={styles.caption}>{barista.caption}</p>
            <p>{barista.description}</p>
        </div>
    );
}
