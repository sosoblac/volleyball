import React from 'react'
import styles from './allteamdropdown.module.css'

const AllTeamsDropDown = () => {
  return (
    <div className={styles.allTeams}>
        <p className={styles.allTeamsText}>All teams</p>
        <p className={styles.downIcon}>V</p>
    </div>
  )
}

export default AllTeamsDropDown
