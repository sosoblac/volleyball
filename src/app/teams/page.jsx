import React from 'react'
import styles from './teams.module.css'
import AllTeams from '../../components/TeamsPage/AllTeams/AllTeams'

const teams = () => {
  return (
    <div className={styles.allTeamsPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>PRO VOLLEYBALL FEDERATION TEAMS</h1>
        </div>
      </section>
      <AllTeams/>

    </div>
  )
}

export default teams
