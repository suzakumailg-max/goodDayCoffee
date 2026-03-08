import React from "react";
import styles from "./BaristaSection.module.css";
import BaristaText from "./BaristaText/BaristaText";
import tokuda from "../../assets/images/barista1-min.jpg";
import takeda from "../../assets/images/barista2-min.jpg";

export default function BaristaSection() {
    return (
        <>
            <section className={styles.section}>
                <h2 className={styles.hedings}>Barista</h2>

                <div className={styles.card}>
                    <div className="imgbox">
                        <img src={tokuda} alt="tokuda" />
                    </div>

                    <div className={styles.text}>
                        <BaristaText index={0} />
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.text}>
                        <BaristaText index={1} />
                    </div>
                    <div className="imgbox">
                        <img src={takeda} alt="takeda" />
                    </div>
                </div>
            </section>
        </>
    );
}
