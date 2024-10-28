import React from 'react'
import styles from './newsdetails.module.css'
import { TfiFacebook } from 'react-icons/tfi'
import { BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from 'react-icons/bs'

const NewsDetails = ({news}) => {
  return (
    <div className={styles.container}>
        <div className={styles.dateSocials}>
            <div className={styles.date}>{news.date}</div>
            <div className={styles.socials}>
                <TfiFacebook size={20}  className={styles.socialLinks}/>
                <BsTwitterX size={20}  className={styles.socialLinks} />
                <BsInstagram size={20}  className={styles.socialLinks} />
                <BsYoutube size={20}  className={styles.socialLinks} />
                <BsTiktok size={20}  className={styles.socialLinks} />
            </div>
        </div>
        <div className={styles.newsDetails}>
          <p>
            {news.description}
          </p>
        </div>
      
    </div>
  )
}

export default NewsDetails
