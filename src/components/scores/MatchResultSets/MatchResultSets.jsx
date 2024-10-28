import React from 'react'
import styles from './matchresultsets.module.css'

const MatchResultSets = () => {
  return (
    <div className={styles.container} >
        <div className={styles.table}>
            <div className={styles.homesets}>
                <div className={styles.teamLogo}>
                    <img src="/avlogo.webp" alt="" />
                </div>
                <div className={styles.homeTeamName}><p>Legend spikers</p></div>

                <div className={styles.sets}><p>24</p></div>
                <div className={styles.sets}><p>24</p></div>
                <div className={styles.sets}><p>24</p></div>
                <div className={styles.sets}><p>24</p></div>
                <div className={styles.sets}><p>24</p></div>
                <div className={styles.finalScore}><p>3</p></div>
            </div>
            <hr  style={{lineHeight:'0px',border: '1px solid #e2e5ea'}}/>
            <div className={styles.homesets}>
                <div className={styles.teamLogo}>
                    <img src="/avlogo.webp" alt="" />
                </div>
                <div className={styles.homeTeamName}><p>Legend spikers</p></div>

                <div className={styles.sets}><p>24</p></div>
                <div className={styles.sets}><p>24</p></div>
                <div className={styles.sets}><p>24</p></div>
                <div className={styles.sets}><p>24</p></div>
                <div className={styles.sets}><p>24</p></div>
                <div className={styles.finalScore}><p>2</p></div>
            </div>


        </div>
    </div>
  )
}

export default MatchResultSets
