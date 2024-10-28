import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import { TfiFacebook } from 'react-icons/tfi'
import { BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.policyTerms}>

            <Link href='/' className={styles.footerLogo}>
              <img src="/navbarlogo.png" alt="" />
            </Link>
            <p>
              <Link href='/' className={styles.footerAfter}> Privacy Policy /</Link>
              
              <Link href='/' className={styles.footerAfter}> Terms of Service</Link>
            </p>

          </div>
          <div className={styles.footerSocials}>
            <TfiFacebook size={20} color='white'  className={styles.socialLinks}/>
            <BsTwitterX size={20} color='white' className={styles.socialLinks} />
            <BsInstagram size={20} color='white' className={styles.socialLinks} />
            <BsYoutube size={20} color='white' className={styles.socialLinks} />
            <BsTiktok size={20} color='white' className={styles.socialLinks} />
          </div>
          <div className={styles.footerPoweredBy}>
            <p>Powered by</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
