import React from 'react'
import styles from './becomeamember.module.css'
import Link from 'next/link'

const BecomeAmember = () => {
  return (
    <section className={styles.becomeAmember}>
        <div className={styles.container} 
        style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("/memberbackground.webp")',
        backgroundSize: 'cover', // Adjusts the size of the image
        backgroundPosition: 'center', // Centers the image
        width: '100%', // Adjust the width of the div
        height: '100%', // Adjust the height of the div
        opacity:'1'
      }}>
            {/* <img src="/memberbackground.webp" alt="" className={styles.backgroungImg}/> */}
            <h1>
              <span style={{color:'white'}}>BECOME A </span>
              <span style={{color:' #f5d435'}}>PRO VOLLEYBALL FEDERATION INSIDER</span>
            </h1>
            <p>SIGN UP FOR ALL OF THE LATEST UPDATES AROUND THE LEAGUE</p>

            <Link href='/' className={styles.signup}>
              CLICK HERE
            </Link>
        </div>

      
    </section>
  )
}

export default BecomeAmember
