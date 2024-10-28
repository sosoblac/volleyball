import React from 'react'
import styles from './matchstats.module.css'
import MatchResultSets from '../../../components/scores/MatchResultSets/MatchResultSets'

const page = ({params}) => {
  return (
    <div className={styles.container}>
        <section className={styles.matchResultSets}>
            <div className={styles.matchDetails}>
                <div className={styles.matchDateLocation}>
                    <p>24 January 2024</p>
                    <p>02:00 GMT+1</p>
                </div>
                <div className={styles.matchScore}>
                    <div className={styles.homeDetails}>
                        <img src="/avlogo.webp" alt="" />
                        <h1>Legend spikers</h1>
                    </div>
                    <div className={styles.finalscores}>
                        <p>&lt;</p>
                        <h1>3</h1>
                        <p className={styles.divider}>-</p>
                        <h1>2</h1>
                        <p>&gt;</p>

                    </div>
                    <div className={styles.awayDetails}>
                        <h1>Gallant Spikers</h1>
                        <img src="/furylogo.webp" alt="" />
                        
                    </div>
                </div>
                <MatchResultSets/>
            </div>
        </section>

        <section className={styles.matchstats}>
            MATCH STATS
        </section>
    </div>
  )
}

export default page
