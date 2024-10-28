import React from 'react'
import styles from './simplehero.module.css'

const SimpleHero = ({title, img}) => {
  return (
    <section className={styles.hero}>
        <div className={styles.container}>
            <img src={`${img}`} alt="" />
            <div className={styles.title}>
              <h1>{title}</h1>
            </div>
        </div>
    </section>
  )
}

export default SimpleHero
