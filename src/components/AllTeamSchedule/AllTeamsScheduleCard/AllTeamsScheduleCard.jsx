import React from 'react'
import styles from './allteamschedulecard.module.css'
import Link from 'next/link'


const AllTeamsScheduleCard = ({schedule}) => {

  return (
            <div className={styles.card}>
                <div className={styles.scheduleDate}>
                    <h4>{schedule.date}</h4>
                </div>
                <div className={styles.scheduleDetails}>
                    <div className={styles.teamsDetails}>
                    <h3>{schedule.hometeam}</h3>
                    <img src={`${schedule.homelogo}`} alt="" />
                    <span className={styles.teamDivider}>at</span>
                    <img src={`${schedule.awaylogo}`} alt="" />
                    <h3>{schedule.awayteam}</h3>
                    <p className={styles.location}>{schedule.location}</p>
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
                    <Link href={`/all-teams-schedule/${schedule.id}`} className={styles.link}>
                    <p>STATS</p>
                    </Link>
                    <Link href='#' className={styles.link}>
                    <p>RECAP</p>
                    </Link>
                    <Link href='#' className={styles.link}>
                    <p>RECAP</p>
                    </Link>
                </div>
            </div>
  )
}

export default AllTeamsScheduleCard
