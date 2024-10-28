import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { TfiFacebook } from "react-icons/tfi";
import { BsTwitterX , BsInstagram, BsYoutube, BsTiktok} from "react-icons/bs";

const NavBar = () => {
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
              <Link href='/teams' className={styles.listLink}>
                TEAMS
              </Link>
              <div className={styles.triangle}></div>
              <div className={styles.subMenu}>
                <div className={styles.subMenuContainer}>
                  <ul className={styles.subMenuListContainer}>
                    <li className={styles.submenulistitems}>
                      <ul className={styles.lst}>
                        <li>
                          <Link href='/' className={styles.lstitems}>
                            <img src="/avlogo.webp" alt="" style={{height:'50px',width:'50px'}} />
                            <p>Legend Spikers</p>
                          </Link>
                        </li>
                        <li>
                          <Link href='/' className={styles.lstitems}>
                            <img src="/avlogo.webp" alt="" style={{height:'50px',width:'50px'}} />
                            <p>Gallant spikers</p>
                          </Link>
                        </li>
                        <li>
                          <Link href='/' className={styles.lstitems}>
                            <img src="/avlogo.webp" alt="" style={{height:'50px',width:'50px'}} />
                            <p>Eagle Spikers</p>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={styles.submenulistitems}>
                      <ul className={styles.lst}>
                        <li>
                          <Link href='/' className={styles.lstitems}>
                            <img src="/avlogo.webp" alt="" style={{height:'50px',width:'50px'}} />
                            <p>Atlanta Vibe</p>
                          </Link>
                        </li>
                        <li>
                          <Link href='/' className={styles.lstitems}>
                            <img src="/avlogo.webp" alt="" style={{height:'50px',width:'50px'}} />
                            <p>Atlanta Vibe</p>
                          </Link>
                        </li>
                        <li>
                          <Link href='/' className={styles.lstitems}>
                            <img src="/avlogo.webp" alt="" style={{height:'50px',width:'50px'}} />
                            <p>Atlanta Vibe</p>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles.list}>
              <Link href='/' className={styles.listLink}>
                LEAGUE
              </Link>
              <div className={styles.triangle}></div>
              
            </li>
            <li className={styles.list}>
              <Link href='/news' className={styles.listLink}>
                NEWS
              </Link>
              <div className={styles.triangle}></div>
            </li>
            <li className={styles.list}>
              <Link href='/all-teams-schedule' className={styles.listLink}>
                SCHEDULE
              </Link>
            </li>
            <li className={styles.list}>
              <Link href='/' className={styles.listLink}>
                STATS
              </Link>
              <div className={styles.triangle}></div>
            </li>
            <li className={styles.list}>
              <Link href='/' className={styles.listLink}>
                STANDINGS
              </Link>
            </li>
            <li className={styles.list}>
              <Link href='/' className={styles.listLink}>
                CHAMPIONSHIP
              </Link>
            </li>
            <li className={styles.list}>
              <Link href='/' className={styles.listLink}>
                TICKET
              </Link>
            </li>
            <li className={styles.list}>
              <Link href='/' className={styles.listLink}>
                SHOP
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

export default NavBar
