import React from "react";
import styles from "./MyText.Module.css";


// import styles from "./MyText.module.scss";

export function MyText({ title, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.text}>
          {props.children}
        </p>
      </div>
    </div>
  );
}
