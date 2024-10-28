import React from 'react'
import styles from './teamhero.module.css'

const TeamHero = () => {
  return (
      <div className={styles.container}>
        <img src="/teamheroimage.webp" alt="" />
        <h1>WELCOME TO LEGEND SPIKERS VOLLEYBALL CLUB</h1>
        <p>We are dedicated to training you and giving you the best platform to succeed and excel</p>
        <button>BECOME A MEMBER</button>
      </div>
  )
}

export default TeamHero
