import React from 'react'
import styles from './allteams.module.css'
import Link from 'next/link'
const AllTeams = () => {
    return (
        <section className={styles.meetTheTeams}>
            <div className={styles.container}>
                <h1></h1>
                <div className={styles.teams}>
                    <div className={styles.teamContainer}>
                        <Link href='/' className={styles.homeTeamLink}>
                            <div className={styles.teamImgContainer} style={{backgroundColor:'black'}}>
                                <img src="/meettheteamlogos/teamlogo1.webp" alt="" className={styles.teamImg} />
                            </div>
                            <div className={styles.homeTeamName}>
                                <h4>Orlando Valkyries</h4>
                            </div>
                        </Link>
                        <div className={styles.teamLinks}>
                            <Link href='/' className={styles.linkHover}><div>TEAM SITE</div></Link>
                            <span>|</span>
                            <Link href='/' className={styles.linkHover}><div>ROSTER</div></Link>
                            <span>|</span>
                            <Link href='/' className={styles.linkHover}><div>SCHEDULE</div></Link>
                        </div>
                    </div>
                    <div className={styles.teamContainer}>
                        <Link href='/' className={styles.homeTeamLink}>
                            <div className={styles.teamImgContainer} style={{backgroundColor:'black'}}>
                                <img src="/meettheteamlogos/teamlogo2.webp" alt="" className={styles.teamImg} />
                            </div>
                            <div className={styles.homeTeamName}>
                                <h4>Orlando Valkyries</h4>
                            </div>
                        </Link>
                        <div className={styles.teamLinks}>
                            <Link href='/' className={styles.linkHover}><div>TEAM SITE</div></Link>
                            <span>|</span>
                            <Link href='/' className={styles.linkHover}><div>ROSTER</div></Link>
                            <span>|</span>
                            <Link href='/' className={styles.linkHover}><div>SCHEDULE</div></Link>
                        </div>
                    </div>
                    <div className={styles.teamContainer}>
                        <Link href='/' className={styles.homeTeamLink}>
                            <div className={styles.teamImgContainer} style={{backgroundColor:'black'}}>
                                <img src="/meettheteamlogos/teamlogo3.webp" alt="" className={styles.teamImg} />
                            </div>
                            <div className={styles.homeTeamName}>
                                <h4>Orlando Valkyries</h4>
                            </div>
                        </Link>
                        <div className={styles.teamLinks}>
                            <Link href='/' className={styles.linkHover}><div>TEAM SITE</div></Link>
                            <span>|</span>
                            <Link href='/' className={styles.linkHover}><div>ROSTER</div></Link>
                            <span>|</span>
                            <Link href='/' className={styles.linkHover}><div>SCHEDULE</div></Link>
                        </div>
                    </div>
                    <div className={styles.teamContainer}>
                        <Link href='/' className={styles.homeTeamLink}>
                            <div className={styles.teamImgContainer} style={{backgroundColor:'black'}}>
                                <img src="/meettheteamlogos/teamlogo8.webp" alt="" className={styles.teamImg} />
                            </div>
                            <div className={styles.homeTeamName}>
                                <h4>Orlando Valkyries</h4>
                            </div>
                        </Link>
                        <div className={styles.teamLinks}>
                            <Link href='/' className={styles.linkHover}><div>TEAM SITE</div></Link>
                            <span>|</span>
                            <Link href='/' className={styles.linkHover}><div>ROSTER</div></Link>
                            <span>|</span>
                            <Link href='/' className={styles.linkHover}><div>SCHEDULE</div></Link>
                        </div>
                    </div>
                    <div className={styles.teamContainer}>
                        <Link href='/' className={styles.homeTeamLink}>
                            <div className={styles.teamImgContainer} style={{backgroundColor:'black'}}>
                                <img src="/meettheteamlogos/teamlogo5.webp" alt="" className={styles.teamImg} />
                            </div>
                            <div className={styles.homeTeamName}>
                                <h4>Orlando Valkyries</h4>
                            </div>
                        </Link>
                        <div className={styles.teamLinks}>
                            <Link href='/' className={styles.linkHover}><div>TEAM SITE</div></Link>
                            <span>|</span>
                            <Link href='/' className={styles.linkHover}><div>ROSTER</div></Link>
                            <span>|</span>
                            <Link href='/' className={styles.linkHover}><div>SCHEDULE</div></Link>
                        </div>
                    </div>
                    <div className={styles.teamContainer}>
                        <Link href='/' className={styles.homeTeamLink}>
                            <div className={styles.teamImgContainer} style={{backgroundColor:'black'}}>
                                <img src="/meettheteamlogos/teamlogo7.webp" alt="" className={styles.teamImg} />
                            </div>
                            <div className={styles.homeTeamName}>
                                <h4>Orlando Valkyries</h4>
                            </div>
                        </Link>
                        <div className={styles.teamLinks}>
                            <Link href='/' className={styles.linkHover}><div>TEAM SITE</div></Link>
                            <span>|</span>
                            <Link href='/' className={styles.linkHover}><div>ROSTER</div></Link>
                            <span>|</span>
                            <Link href='/' className={styles.linkHover}><div>SCHEDULE</div></Link>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </section>
      )
}

export default AllTeams
