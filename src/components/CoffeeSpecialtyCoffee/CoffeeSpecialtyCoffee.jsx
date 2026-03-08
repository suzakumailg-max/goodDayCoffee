import CoffeeTextBox from "../CoffeeTextBox/CoffeeTextBox";
import styles from "./CoffeeSpecialtyCoffee.module.css";
import coffeeRank from "../../assets/images/coffee_rank.svg";

export default function CoffeeSpecialtyCoffee() {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.heading}>Specialty Coffee</h2>
            <section className={styles.section}>
                <div className={styles.sectionTextBox}>
                    <CoffeeTextBox id={1} />
                    <CoffeeTextBox id={2} />
                </div>

                <div className={styles.sectionImageBox}>
                    <img src={coffeeRank} alt="スペシャリティコーヒーのランクを示す画像" />
                </div>
            </section>
        </section>
    );
}
