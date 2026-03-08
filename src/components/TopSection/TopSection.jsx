import styles from "./TopSection.module.css";
import { Link } from "react-router-dom";
import { sections } from "./TopSection.js";

export default function ConceptFirstText () {
  return(
    <>
    {sections.map((item)=>(
      <section key={item.id} className={styles.sectionContainerOuter}>
        <div
          className={[styles.sectionContainer, item.direction === "row-reverse" ? styles.reverse : null]
          .filter(Boolean)
          .join(" ")}
          >
            <div className={styles.sectionTextArea}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <Link to={item.to} className={styles.sectionLink}>
              <span>{item.linkLabel}</span>
              </Link>
            </div>
              <div className={styles.sectionImageArea}>
                <img src={item.imgSrc} alt={item.imgAlt} />
              </div>
            </div>
      </section>
    ))};
    </>
  );
}