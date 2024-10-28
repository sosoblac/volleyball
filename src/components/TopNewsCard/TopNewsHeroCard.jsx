import React from 'react'
import styles from '../Hero/hero.module.css'
import Link from 'next/link'
const TopNewsHeroCard = () => {
  return (
            <div className={styles.topNewsListArticleCard}>
              <Link href='/' className={styles.topNewsListArticleCardLink}>
                <img src="/listarticleimage.webp" alt="" className={`${styles.topNewsListArticleCardImg} ${styles.imgHover}`} />
              </Link>

              <div className={styles.topNewsListArticleBody}>
                <p className={styles.topNewsListDate}>
                  AUGUST 27, 2024
                </p>
                <Link href='\' className={`${styles.topNewsListTitle} ${styles.linkHover}`}>
                  Valkyries Sign Rookie Libero
                </Link>
                <p className={styles.topNewsListDescription}>
                  Shanel Bramschreiber, a libero, has agreed to a 
                  one-year deal with the Orlando Valkyries, the team
                </p>
              </div>
            </div>
  )
}

export default TopNewsHeroCard
