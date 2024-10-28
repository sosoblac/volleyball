import React from 'react'
import styles from './allteamschedule.module.css'
import AllTeamsScheduleCard from './AllTeamsScheduleCard/AllTeamsScheduleCard'
import {allTeamsSchedule} from '../../data/data'

const AllTeamSchedule = () => {
  return (
    <div className={styles.container}>
        <div className={styles.scheduleTitle}>
            <p>MATCH UP</p>
            <p>LOCATION</p>
            <p>TIME</p>

        </div>
        <div className={styles.schedule}>
          {allTeamsSchedule.map((schedule,index)=>(
            <div key={index}>
              <AllTeamsScheduleCard schedule={schedule} />
            </div>
          ))}
            
            {/* <AllTeamsScheduleCard allTeamsSchedule={allTeamsSchedule}/> */}
        </div>
    </div>
  )
}

export default AllTeamSchedule
