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
                    <button className={styles.investParent}>
                        <div className={styles.invest}>Invest</div>
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
        </nav>
        //    <Image src="/Frame.png" width="100" height="100y">
        //    </Image>
    )
}
export default Navbar
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCompass,
//   faMapMarkerAlt,
//   faUser,
//   faShoppingCart
// } from "@fortawesome/free-solid-svg-icons";



//   return (
//       <nav className={styles.navMenu}>
//         <div className={styles.navbar} id="nav">
//           <div className={styles.itemGrid}>
//                 <Image  className={styles.logo}
//                   src="/images/Frame.png" alt="logo" width={108.75} height={30} />
//             </div>
//             <div className={styles.itemGrid}>
//               <ul className={styles.menuList}>
//                 <Link href='/Invest'><li width={120}>Invest</li></Link>
//                 <Link href='/blog'><li width={86}>Blog</li></Link>
//                 <Link href='/About'><li>About</li></Link>
//               </ul>
//               </div>
//               <div className={styles.itemGrid}>
//               <button className={styles.bestinvestment}>Best Investment Options</button>
//             </div>
//             </div>
//       </nav>
    
//   )
// }

