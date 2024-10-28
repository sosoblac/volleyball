import React from 'react'
import styles from './hero.module.css'
import Link from 'next/link'
import TopNewsHeroCard from '../TopNewsCard/TopNewsHeroCard'
const Hero = () => {
  return (
    <section className={styles.topNews}>
      <div className={`${styles.container} ${styles.topNewsContainer} `}>
        <div className={styles.topNewsWrapper}>
          <div className={styles.topNewsSingle}>
            <div className={styles.topNewsArticle}>
              <Link href='/' className={styles.topNewsArticleLink}>
                <img src="/topnewsarticleimg.webp" alt="" className={styles.topNewsArticleImg}/>
              </Link>
              <div className={styles.topNewsArticleBody}>
                <p className={styles.articleBodyDate}>
                August 27, 2024
                </p>
                <Link href='/' className={styles.articleBodyTitle}>
                Pro Volleyball Federation Free Agent Signing Central
                </Link>
                <p className={styles.articleBodyDescription}>
                Fresh off a successful first season, Pro Volleyball Federation 
                continues preparation for season two as its free agency signing
                 period for returning players has begun.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.topNewsList}>
            <TopNewsHeroCard/>
            <TopNewsHeroCard/>
            <TopNewsHeroCard/>
            <TopNewsHeroCard/>
           
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
