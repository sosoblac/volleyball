import React from 'react'
import styles from './schedule.module.css'
import Link from 'next/link'

const Schedule = () => {
  return (
    <div className={styles.schedule}>
                <div className={styles.scheduleDetails}>
                    <p>TUE. MAY.7</p>

                   <div className={styles.teamsDetails}>
                    <h3>COLUMBUS FURY volleyball club</h3>
                    <img src="/furylogo.webp" alt="" />
                    <span className={styles.teamDivider}>at</span>
                    <img src="/avlogo.webp" alt="" />
                    <h3>SANdddd DIEGO MOJO</h3>
                    <p className={styles.location}>VIEJAS ARENA</p>
                   </div>

                    <div className={styles.result}>
                        <h1>W</h1>
                        <h1>3</h1>
                        <h1>-</h1>
                        <h1>1</h1>
                    </div>

                    <div>
                        <Link href='#' className={styles.video}>
                            <img src="/youtube.webp" alt="" />
                        </Link>
                    </div>
                </div>
                <div href='#' className={styles.stats}>
                    <Link href='#'>
                    <p>stats</p>
                    </Link>
                </div>
            </div>
  )
}

export default Schedule
