import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo-white.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNavWrap}>
        <ul className={styles.footerNav}>
          <li>
            <Link to="/contact">お問い合わせ</Link>
          </li>
          <li>
            <Link to="/coffee">プライバシーポリシー</Link>
          </li>
          <li>
            <Link to="/barista">会社概要</Link>
          </li>
        </ul>
      </nav>

        <small className={styles.copyright}>
          <img src={logo} alt="Logo" />
            <br />
              ALL RIGHTS RESERVED.
        </small>
    </footer>
  );
}
