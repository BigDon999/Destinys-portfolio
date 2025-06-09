import React from 'react'
import Styles from "./Section-header.module.css"

function SectionHeader({title,subtitle}) {
  return (
    <header className={Styles.sectionHeader}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
    </header>
  )
}

export default SectionHeader