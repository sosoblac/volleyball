import React from 'react'
import styles from './schedulecard.module.css'
import { Nerko_One ,Roboto_Condensed,Oxanium} from 'next/font/google'



const oxanium =Oxanium({
    subsets:['latin'], weight:['700']
  })
  const oxanium600 =Oxanium({
    subsets:['latin'], weight:['600']
  })


const ScheduleCard = () => {
  return (
    <div className={styles.scheduleDetailsCard}>
        <h1 className={styles.scheduleCardTitle}> SATURDAY, APR 20 </h1>
        <div className={styles.scheduleLocation}>
            CHI HEALTH CENTER
        </div>
        <p className={styles.scheduleScore} > OMA 3-2</p>
        <div className={styles.teamsHomeAway}>
            {/* HOME TEAM LOGO AND DETAILS */}
            <div className={styles.homeTeam}>
            <div className={styles.teamLogo}>
                <img src="/hometeamlogo.webp" alt="" className={styles.homeTeamImage} />
            </div>
                <p className='Team Name'> SAN DIEGO <b>MOJO</b></p>
            </div>

            {/* AWAY TEAM LOGO AND DETAILS */}
            <div className={styles.homeTeam}>
            <div className={styles.teamLogo} style={{backgroundColor:'purple'}}>
                <img src="/hometeamlogo.webp" alt="" className={styles.homeTeamImage} />
            </div>
                <p className={styles.teamName}> SAN DIEGO <b>MOJO</b></p>
            </div>
        </div>
        <button className={`${styles.cardButton} ${oxanium600.className}`}>Stats</button>
    </div>
  )
}

export default ScheduleCard
