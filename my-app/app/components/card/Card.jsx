import React, {children} from 'react';
import styles from "./card.module.css";


function Card({ children, className = ''}) {
  return (
    <article className={`${styles.card} ${className}`}>{children}</article>
  );
}

export default Card;