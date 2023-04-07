import React from 'react'
import data from '../api/Data/StartInvesting.json'
import styles from '/styles/StartInvesting.module.css'

const StartInvesting = () => {
  return (
    <div className={styles.StartInvesting}>
      <div className={styles.frameParent}>
        <div className={styles.headerParent}>
        <h1 className={styles.header}>{data.StartInvesting.header}</h1>
        </div>
        <div>
        <p className={styles.content}> {data.StartInvesting.content} </p>
        </div>
        <div className={styles.buttonParent}>
          <button className={styles.button}>{data.StartInvesting.button}</button>
        </div>
        
        </div>
    </div>
  )
}

export default StartInvesting