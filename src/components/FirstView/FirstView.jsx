import styles from "./FirstView.module.css";
import firstViewVideo from "../../assets/videos/top-movie2.mp4";
import logo from "../../assets/logo-white.svg";

export default function FirstView() {
    return (
        <section className={styles.firstView}>
            <video src={firstViewVideo} autoPlay muted loop playsInline className={styles.video}></video>
            <h2 className={styles.logo}>
                <img src={logo} alt="GDC Cafe Logo" />
            </h2>
            <div className={styles.scroll}>scroll</div>
        </section>
    );
}
