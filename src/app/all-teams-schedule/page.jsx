import React from 'react'
import styles from './allteamsschedule.module.css'
import SimpleHero from '../../components/SimpleHero/SimpleHero'
import AllTeamSchedule from '../../components/AllTeamSchedule/AllTeamSchedule'

const page = () => {
  return (
    <div className={styles.wrapper}>
      <SimpleHero title ='ALL TEAMS SCHEDULE' img='/allteams.webp'/>

      <section>
        <AllTeamSchedule/>
      </section>
    </div>
    
  )
}

export default page
