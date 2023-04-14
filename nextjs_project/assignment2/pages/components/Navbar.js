import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
import styles from '/styles/Navbar.module.css'
// import Image from "next/image";

const Navbar = () => {
    return (
        <nav className={styles.navBar}>
            <img className={styles.frameIcon} src="/frame.svg" />
            <div className={styles.frameParent}>
                <div className={styles.frameWrapper}>
                    <button className={styles.investParent} onclick="this.classList.toggle('active');">
                        <div className={styles.invest}>Invest </div>
                        
                        <img
                            className={styles.chevronDownIcon}
                            src="/Vector.svg"
                        />
                    </button>
                </div>
                <div className={styles.blogsWrapper}>
                    <div className={styles.invest}>Blogs</div>
                </div>
                <div className={styles.blogsWrapper}>
                    <div className={styles.invest}>About</div>
                </div>
            </div>
            <button className={styles.BIOButton}>
                <div className="BIO">
                    Best Investment Options
                </div>
            </button>
            <div className={styles.burger} class="dropbtn" onclick="this.classList.toggle('active');">
            
            <div class="hamburger-lines" >
              <span class="line line1"></span>
              <span class="line line2"></span>
            </div>  
            <div id="myDropdown" class="dropdown-content"></div>
          {/* <div class="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">blogs</a></li>
            <li><a href="#">portfolio</a></li>
            <li><a href="#">contact</a></li>
          </div> */}
          </div>
        </nav>
    )
}
export default Navbar


