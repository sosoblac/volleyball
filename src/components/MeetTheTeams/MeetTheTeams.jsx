import React from 'react'
import styles from './meettheteams.module.css'
import Link from 'next/link'

const MeetTheTeams = () => {
  return (
    <section className={styles.meetTheTeams}>
        <div className={styles.container}>
            <h1>MEET THE TEAMS</h1>
            <div className={styles.teams}>
                <Link href='/' className={styles.homeTeamLink}>
                    <div className={styles.teamImgContainer} style={{backgroundColor:'red'}}>
                        <img src="/meettheteamlogos/teamlogo1.webp" alt="" className={styles.teamImg} />
                    </div>
                    <div className={styles.homeTeamName}>
                        <h4>Orlando Valkyries</h4>
                    </div>
                </Link>
                <Link href='/' className={styles.homeTeamLink} >
                    <div className={styles.teamImgContainer} style={{backgroundColor:'black'}}>
                        <img src="/meettheteamlogos/teamlogo2.webp" alt="" className={styles.teamImg} />
                    </div>
                    <div className={styles.homeTeamName}>
                        <h4>Orlando Valkyries</h4>
                    </div>
                </Link>
                <Link href='/' className={styles.homeTeamLink}>
                    <div className={styles.teamImgContainer} style={{backgroundColor:'#003057'}}>
                        <img src="/meettheteamlogos/teamlogo3.webp" alt="" className={styles.teamImg} />
                    </div>
                    <div className={styles.homeTeamName}>
                        <h4>Orlando Valkyries</h4>
                    </div>
                </Link>
                <Link href='/' className={styles.homeTeamLink}>
                    <div className={styles.teamImgContainer} style={{backgroundColor:'red'}}>
                        <img src="/meettheteamlogos/teamlogo8.webp" alt="" className={styles.teamImg} />
                    </div>
                    <div className={styles.homeTeamName}>
                        <h4>Orlando Valkyries</h4>
                    </div>
                </Link>
                <Link href='/' className={styles.homeTeamLink}>
                    <div className={styles.teamImgContainer} style={{backgroundColor:'#41b6e6'}}>
                        <img src="/meettheteamlogos/teamlogo5.webp" alt="" className={styles.teamImg} />
                    </div>
                    <div className={styles.homeTeamName}>
                        <h4>Orlando Valkyries</h4>
                    </div>
                </Link>
                <Link href='/' className={styles.homeTeamLink}>
                    <div className={styles.teamImgContainer} style={{backgroundColor:'#ffc72c'}}>
                        <img src="/meettheteamlogos/teamlogo6.webp" alt="" className={styles.teamImg} />
                    </div>
                    <div className={styles.homeTeamName}>
                        <h4>Orlando Valkyries</h4>
                    </div>
                </Link>
                <Link href='/' className={styles.homeTeamLink}>
                    <div className={styles.teamImgContainer} style={{backgroundColor:'#002a3a'}}>
                        <img src="/meettheteamlogos/teamlogo7.webp" alt="" className={styles.teamImg} />
                    </div>
                    <div className={styles.homeTeamName}>
                        <h4>Orlando Valkyries</h4>
                    </div>
                </Link>
                <Link href='/' className={styles.homeTeamLink}>
                    <div className={styles.teamImgContainer} style={{backgroundColor:'black'}}>
                        <img src="/meettheteamlogos/teamlogo8.webp" alt="" className={styles.teamImg} />
                    </div>
                    <div className={styles.homeTeamName}>
                        <h4>Orlando Valkyries</h4>
                    </div>
                </Link>
            </div>
        </div>
        
    </section>
  )
}

export default MeetTheTeams
