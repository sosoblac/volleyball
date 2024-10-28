import React from 'react'
import styles from './teamschedule.module.css'
import Link from 'next/link'
import Schedule from '../TeamSchedule/ScheduleComponent/Schedule'

const TeamSchedule = () => {

    const teamschedule = [
        {
            date: 'TUE. MAY.7',
            hometeam: ' LEGEND SPIKERS',
            homelogo: '/furylogo.webp',
            awaylogo: '/avlogo.webp',
            awauyteam: 'SANDIEGO MOJO',
            vanue:'VIEJAS ARENA'
        },
        {
            date: 'MON. MAY.12',
            hometeam: ' LEGEND SPIKERS',
            homelogo: '/furylogo.webp',
            awaylogo: '/avlogo.webp',
            awauyteam: 'GALLAND SPIKERS',
            vanue:'LEGEND VOLLEYBALL COURT'
        },
        {
            date: 'SAT. JUNE.15',
            hometeam: ' GALLANT SPIKERS',
            homelogo: '/furylogo.webp',
            awaylogo: '/avlogo.webp',
            awauyteam: 'LEGEND SPIKERS',
            vanue:'LEGEND VOLLEYBALL COURT'
        },
        {
            date: 'SUN. JUNE.16',
            hometeam: ' LEGEND SPIKERS',
            homelogo: '/furylogo.webp',
            awaylogo: '/avlogo.webp',
            awauyteam: 'EAGLE SPIKERS',
            vanue:'LEGEND VOLLEYBALL COURT'
        },
    ]
  return (
    <div className={styles.container}>
        <div className={styles.scheduleTitle}>
            <h1>SCHEDULE</h1>
            <Link className={styles.link} href='#'>
                <h2>View full schedule</h2>
            </Link>
        </div>
        <div className={styles.schedules}>
            {teamschedule.map((schedule,index)=>(
                <Schedule schedule = {schedule} key={index}/>
            ))}
        </div>
    </div>
  )
}

export default TeamSchedule
