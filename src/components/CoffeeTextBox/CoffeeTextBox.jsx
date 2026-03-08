import React from "react";
import styles from "./CoffeeTextBox.module.css";
import { coffeeList } from "./coffeeList";

export default function CoffeeTextBox({ id }) {
    return (
        <>
            <h3 className={styles.heading}>{coffeeList[id - 1].heading}</h3>
            <p className={styles.description}>{coffeeList[id - 1].description}</p>
        </>
    );
}
