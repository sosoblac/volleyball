import React from 'react'
import styles from './homeschedule.module.css'
import { Nerko_One ,Roboto_Condensed,Oxanium} from 'next/font/google'
import ScheduleCard from '../ScheduleCard/ScheduleCard'
import AllTeamsDropDown from '../AllTeams/AllTeamsDropDown'


const nerkoone = Nerko_One({
  subsets:['latin'],weight:['400']
})
const roboto = Roboto_Condensed({
  subsets:['latin'],weight:['900']
})

const oxanium =Oxanium({
  subsets:['latin'], weight:['700']
})
const oxanium600 =Oxanium({
  subsets:['latin'], weight:['600']
})

const HomeSchedule = () => {
  return (
    <section className={styles.homeSchedule}>
        <div className={styles.container}>
            <div className={styles.schedule}>
              {/* Schedule and presented by div */}
              <div className={styles.scheduleTitle}>
                {/* <p className={`${styles.scheduleText} ${oxanium.className}`}>SCHEDULE</p> */}
                <div className={styles.schedulelogo}>
                  <p className={styles.presentedBy}>
                    Presented By
                  </p>
                  <img src="/presentedby.webp" alt="presented by" className={styles.presentedByImg} />
                </div>
              </div>

              {/* All teams List div */}

              <AllTeamsDropDown/>
                
            </div>

            <div className={styles.scheduleDetailsContainer}>
              <ScheduleCard/>
              <ScheduleCard/>
              <ScheduleCard/>
              <ScheduleCard/>
            </div>

            <button className={`${styles.fullScore} ${oxanium.className}`}> Full Scoreboard</button>

        </div>

    </section>
  )
}

export default HomeSchedule
