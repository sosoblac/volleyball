import React from 'react'
import styles from './team.module.css'
import TeamHero from '../../../components/TeamPageComponents/TeamHero'
import RecentTeamNews from '../../../components/TeamPageComponents/RecentTeamNews/RecentTeamNews'
import TeamSchedule from '../../../components/TeamPageComponents/TeamSchedule/TeamSchedule'
import {latestnews} from "../../../data/data"

const TeamName = ({params}) => {
  console.log(params,'this is the params')
  return (
    <>
      <section className={styles.teamHero}>
        <TeamHero />
      </section>

      <section className={styles.recentTeamNews}>
        <RecentTeamNews data = {latestnews}/>
      </section>

      <section className={styles.teamSchedule}>
        <TeamSchedule/>
      </section>
    </>
  )
}

export default TeamName
