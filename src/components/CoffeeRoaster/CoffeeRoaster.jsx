import CoffeeTextBox from "../CoffeeTextBox/CoffeeTextBox";
import styles from "./CoffeeRoaster.module.css";
import coffeeRoaster from "../../assets/images/top-cont2-min.jpg";

export default function CoffeeRoaster() {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.heading}>Roaster</h2>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={coffeeRoaster} alt="コーヒーロースターの画像" />
                </div>
                <div className={styles.textBox}>
                    <CoffeeTextBox id={3} />
                </div>
            </div>
        </section>
    );
}
