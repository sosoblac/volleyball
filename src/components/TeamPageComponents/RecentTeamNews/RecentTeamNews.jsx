import React from 'react'
import styles from './recentteamnews.module.css'
import Link from 'next/link'
// import {news} from '../../../data/data'
import CardNoDescription from '../../CardNoDescription/CardNoDescription'

const RecentTeamNews = ({data}) => {
  
  return (
    <div className={styles.container}>
        <h1>RECENT LEGEND SPIKERS NEWS</h1>
        <div className={styles.teamNews}>
          {data.map((news,index)=>(
            <CardNoDescription news = {news} key = {index}/>
            ))}
            
            <button>Load More</button>
        </div>
    </div>
  )
}

export default RecentTeamNews
