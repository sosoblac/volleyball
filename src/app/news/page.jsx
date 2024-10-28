import React from 'react'
import styles from './news.module.css'
import LatestPosts from '../../components/News/LatestPosts'
import RecentTeamNews from '../../components/TeamPageComponents/RecentTeamNews/RecentTeamNews'
import { latestnews } from '../../data/data'

const page = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.container}>
            <img src="/news/newshero.webp" alt=""/>
          <h1>LATEST NEWS</h1>
        </div>
      </section>

      <section className={styles.latestPost}>
        {/* <LatestPosts/> */}
        <RecentTeamNews data={latestnews}/>

      </section>
     
    </div>
  )
}

export default page
