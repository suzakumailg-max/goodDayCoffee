import styles from "./TopNews.module.css";
// actionsで１回失敗した箇所。大文字小文字ミス
import { newsList } from "./newsList";

export default function TopNews() {
    return (
        <>
            <section className={styles.newsSection}>
                <h2 className={styles.newsHeading}>News</h2>

                <dl className={styles.newsList}>
                    {newsList.map((item) => (
                        <div key={item.id} className={styles.newsItem}>
                            <dt className={styles.newsDate}>
                                <time dateTime={item.dateTime}>{item.displayDate}</time>
                            </dt>
                            <dd className={styles.newsText}>{item.text}</dd>
                        </div>
                    ))}
                </dl>
            </section>
        </>
    );
}
