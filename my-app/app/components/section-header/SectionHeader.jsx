import React from "react";
import Styles from "./Section-header.module.css";

function SectionHeader({ title, subtitle }) {
  return (
    <header
      className={Styles.sectionHeader}
      style={{ maxWidth: "100vw", width: "100%", boxSizing: "border-box" }}
    >
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </header>
  );
}

export default SectionHeader;
