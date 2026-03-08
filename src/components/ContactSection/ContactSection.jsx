import styles from "./ContactSection.module.css";
import React from "react";

export default function ContactSection() {
    return (
        <section className={styles.section}>
            <h2>
                メールでのお問い合わせにつきましては、下記のお問い合わせフォームからお願いします。
                <br />
                プライバシーポリシーについて同意した上で送信してください。
            </h2>
            <p className={styles.caption}>
                「※」は、ご記入必須項目です。
                <br /> 必ずご記入してくださいますようお願い申し上げます。
            </p>
            <form className={styles.form}>
                <p>
                    <label htmlFor="name">お名前*</label>
                    <input type="text" name="name" id="name" placeholder="良日 太郎" required />
                </p>
                <p>
                    <label htmlFor="tel">電話番号*</label>
                    <input type="tel" name="tel" id="tel" required />
                </p>

                <p>
                    <label htmlFor="email">メールアドレス*</label>
                    <input type="text" name="email" id="email" required />
                </p>

                <p>
                    <label htmlFor="textarea">お問い合わせ内容</label>
                    <textarea name="textarea" id="textarea"></textarea>
                </p>

                <input type="submit" value="確認画面へ" />
            </form>
        </section>
    );
}
