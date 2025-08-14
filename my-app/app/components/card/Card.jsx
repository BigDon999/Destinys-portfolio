import React, { children } from "react";
import styles from "./card.module.css";

function Card({ children, className = "" }) {
  return (
    <article
      className={`${styles.card} ${className}`}
      style={{ maxWidth: "100vw", width: "100%", boxSizing: "border-box" }}
    >
      {children}
    </article>
  );
}

export default Card;
