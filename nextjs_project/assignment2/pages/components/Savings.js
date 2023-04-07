import React from 'react'
import styles from '/styles/Saving.module.css'

const Savings = () => {
  return (
    
    <div className={styles.savingSection}>
        <div className={styles.savingsParent}>
          <div className={styles.savings}>
            <span className={styles.savingsTxtContainer}>
              <span>{`Savings `}</span>
              <span className={styles.span}> ++</span>
            </span>
          </div>
          <div className={styles.getAccessTo}>
            <p>Get access to stable and low risk investment options for goals where
            you cannot afford losses</p>
          </div>
          <div className={styles.saveNowWrapper}>
            <div><a href="">Save Now</a></div>
          {/* </div> */}
        </div>
      </div>
      <div className={styles.savingChild} />
    </div>

  )
}

export default Savings