import React from 'react'
import styles from './latestvideo.module.css'
import AllTeamsDropDown from '../AllTeams/AllTeamsDropDown'

const LatestVideos = () => {
  return (
    <section className={styles.latestVideos}>
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <h1>LATEST VIDEOS</h1>
                <AllTeamsDropDown/>
            </div>
            <div className={styles.videosContainer}>
                <div className={styles.mainVideo}>
                    <iframe
                        src="https://www.youtube.com/embed/n9Uz6Xe3X-M"
                        width='100%'
                        height='100%'
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                    </iframe>
                </div>
                <h2>Pro Volleyball Federation | Grand Rapids Rise at Vegas Thrill @ 10pm ET, April 20, 2024</h2>
                <div className={styles.smallVideos}>
                    <div className={styles.smallVideoCard}>
                        <div className={styles.smallVideo}>
                            <iframe 
                            src="https://www.youtube.com/embed/n9Uz6Xe3X-M"
                            width='100%'
                            height='100%'
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >

                            </iframe>
                        </div>
                        <div className={styles.smallVideoCardDetails}>
                            <p>ATLANTA VIBE  .  APRIL 19, 2024 </p>
                            <h3>Pro Volleyball Federation | Atlanta Vibe at Columbus Fury @ 7pm ET, April 19, 2024</h3>
                        </div>
                    </div>
                    <div className={styles.smallVideoCard}>
                        <div className={styles.smallVideo}>
                            <iframe 
                            src="https://www.youtube.com/embed/n9Uz6Xe3X-M"
                            width='100%'
                            height='100%'
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >

                            </iframe>
                        </div>
                        <div className={styles.smallVideoCardDetails}>
                            <p>ATLANTA VIBE  .  APRIL 19, 2024 </p>
                            <h3>Pro Volleyball Federation | Atlanta Vibe at Columbus Fury @ 7pm ET, April 19, 2024</h3>
                        </div>
                    </div>
                    <div className={styles.smallVideoCard}>
                        <div className={styles.smallVideo}>
                            <iframe 
                            src="https://www.youtube.com/embed/n9Uz6Xe3X-M"
                            width='100%'
                            height='100%'
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >

                            </iframe>
                        </div>
                        <div className={styles.smallVideoCardDetails}>
                            <p>ATLANTA VIBE  .  APRIL 19, 2024 </p>
                            <h3>Pro Volleyball Federation | Atlanta Vibe at Columbus Fury @ 7pm ET, April 19, 2024</h3>
                        </div>
                    </div>
                    <div className={styles.smallVideoCard}>
                        <div className={styles.smallVideo}>
                            <iframe 
                            src="https://www.youtube.com/embed/n9Uz6Xe3X-M"
                            width='100%'
                            height='100%'
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >

                            </iframe>
                        </div>
                        <div className={styles.smallVideoCardDetails}>
                            <p>ATLANTA VIBE  .  APRIL 19, 2024 </p>
                            <h3>Pro Volleyball Federation | Atlanta Vibe at Columbus Fury @ 7pm ET, April 19, 2024</h3>
                        </div>
                    </div>
                    <div className={styles.smallVideoCard}>
                        <div className={styles.smallVideo}>
                            <iframe 
                            src="https://www.youtube.com/embed/n9Uz6Xe3X-M"
                            width='100%'
                            height='100%'
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >

                            </iframe>
                        </div>
                        <div className={styles.smallVideoCardDetails}>
                            <p>ATLANTA VIBE  .  APRIL 19, 2024 </p>
                            <h3>Pro Volleyball Federation | Atlanta Vibe at Columbus Fury @ 7pm ET, April 19, 2024</h3>
                        </div>
                    </div>
                    <div className={styles.smallVideoCard}>
                        <div className={styles.smallVideo}>
                            <iframe 
                            src="https://www.youtube.com/embed/n9Uz6Xe3X-M"
                            width='100%'
                            height='100%'
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >

                            </iframe>
                        </div>
                        <div className={styles.smallVideoCardDetails}>
                            <p>ATLANTA VIBE  .  APRIL 19, 2024 </p>
                            <h3>Pro Volleyball Federation | Atlanta Vibe at Columbus Fury @ 7pm ET, April 19, 2024</h3>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
            <button>Load More</button>
        </div>
    </section>
  )
}

export default LatestVideos
