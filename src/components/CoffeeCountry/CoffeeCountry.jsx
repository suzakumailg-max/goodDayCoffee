import styles from "./CoffeeCountry.module.css";
import { coffeeList } from "./coffeeList";

export default function CoffeeCountry() {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.heading}>Country</h2>

            <div className={styles.container}>
                {coffeeList.map((coffee) => (
                    <div className={styles.box} key={coffee.heading}>
                        <div className={styles.image}>
                            <img src={coffee.images} alt={coffee.heading} />
                        </div>

                        <div className={styles.textBox}>
                            <h3 className={styles.cardHeading}>{coffee.heading}</h3>
                            <p>{coffee.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
