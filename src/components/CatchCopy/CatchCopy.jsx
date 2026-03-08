import styles from "./CatchCopy.module.css";

export default function CatchCopy({ heading, first, second, third, fourth, last }) {
    return (
        <>
            <div className={styles.catchCopyBox}>
                <h2 className={styles.heading}>{heading}</h2>

                <p className={styles.text}>
                    {first}
                    <br />
                    <span>{second}</span>
                    <span>{third}</span>
                    <br />
                    <span>{fourth}</span>
                    <span>{last}</span>
                </p>
            </div>
        </>
    );
}
