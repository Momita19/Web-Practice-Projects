import React from 'react'
import Link from 'next/link'
import styles from '/styles/FdBazaar.module.css'


const Fdbazar = () => {
  return (
    <div className={styles.fdbazar}>
      <div className={styles.emptyBlock1}/>
        <div className={styles.FdBazarContent}>
          <div>
          <h1 className={styles.fdbazarHeader}>FD Bazaar</h1>
          </div>
          <div className={styles.fdbazarp}>
            <p>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          </div>
          <div className={styles.explorefbParent}>
            <a className={styles.explorefd} href="">Explore Fds</a>
          </div>
        </div>
      </div>  
  )
}

export default Fdbazar