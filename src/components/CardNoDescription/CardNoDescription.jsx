import React from 'react'
import Link from 'next/link'
import styles from './cardnodescription.module.css'

const CardNoDescription = ({news}) => {
  return (
    <div className={styles.newsCard}>
        <Link href={`/news/${news.id}`}>
        <div className={styles.imgContainer}>
            <img src={`${news.img}`} alt="" />
        </div>
        </Link>
        <div className={styles.newsDate}>
            <Link href='#' className={styles.link}>{news.team}</Link>  <p className={styles.dotSeparator}>.</p> <p>{news.date}</p>
        </div>
        <Link href={`/news/${news.id}`} className={styles.link}>
            <h3>{news.title}</h3>
        </Link>
        <p className={styles.description}>{news.description}</p>
    </div>
  )
}

export default CardNoDescription
