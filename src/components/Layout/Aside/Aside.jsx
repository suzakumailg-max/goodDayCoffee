import React from "react";
import styles from "./Aside.module.css";
import insta from "../../../assets/images/sns-instagram.svg";
import facebook from "../../../assets/images/sns-facebook.svg";
import twitter from "../../../assets/images/sns-twitter.svg";
import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <>
      <aside className={styles.aside}>
        <div className={styles.inner}>
          <section className={styles.section}>
            <h3 className={styles.heading}>FOLLOW US</h3>
              <ul className={styles.snsList}>
                <li>
                  <a href="#" target="_blank" className={styles.snsLink}>
                    <img src={insta} alt="Instagram" />
                    INSTAGRAM
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className={styles.snsLink}>
                    <img src={facebook} alt="Facebook" />
                    FACEBOOK
                  </a>
                </li>
                  <li>
                    <a href="#" target="_blank" className={styles.snsLink}>
                      <img src={twitter} alt="Twitter" />
                      TWITTER
                    </a>
                  </li>
              </ul>
            </section>

          <section className={styles.section}>
            <h3 className={styles.heading}>CONTACT</h3>
              <ul className={styles.contactList}>
                <li>06-4321-7654</li>
                  <li>
                    <Link to="/contact" className={styles.contactLink} target="_blank">
                      お問い合わせ
                    </Link>
                  </li>
                </ul>
          </section>
        </div>
      </aside>
    </>
  );
}
