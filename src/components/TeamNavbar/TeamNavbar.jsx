import React from 'react'
import styles from './teamnavbar.module.css'
import Link from 'next/link'
import { TfiFacebook } from "react-icons/tfi";
import { BsTwitterX , BsInstagram, BsYoutube, BsTiktok} from "react-icons/bs";

const TeamNavbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* <div className={styles.headerLogo}>  */}
          <Link href='/' className={styles.headerLogo}>
            <img src="/navbarlogo.png" alt="" className={styles.navlogoimg} />
          </Link>
        {/* </div> */}

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.list}>
              <Link href='/' className={styles.listLink}>
                ROSTER
              </Link>
              
            </li>
            <li className={styles.list}>
              <Link href='/' className={styles.listLink}>
                STATS
              </Link>
            
            </li>
            <li className={styles.list}>
              <Link href='/' className={styles.listLink}>
                SCHEDULE
              </Link>
            </li>
            <li className={styles.list}>
              <Link href='/' className={styles.listLink}>
                NEWS
              </Link>
              
            </li>
            <li className={styles.list}>
              <Link href='/' className={styles.listLink}>
                ABOUT
              </Link>
            </li>
            
          </ul>
        </nav>

        <div className={styles.headerSocial}>
        <TfiFacebook size={20}  className={styles.socialLinks}/>
        <BsTwitterX size={20}  className={styles.socialLinks} />
        <BsInstagram size={20}  className={styles.socialLinks} />
        <BsYoutube size={20}  className={styles.socialLinks} />
        <BsTiktok size={20}  className={styles.socialLinks} />

        </div>
      </div>
    </div>
  )
}

export default TeamNavbar
