import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/Stressfree.module.css'

const Stressfree = () => {
  return (
    <>
      <div className={styles.stressgrid}>
        <div className={styles.stressgridItem1}>
        <div className={styles.rupeeCoin}>
          <img id="goldCoin"
            src="/images/RupeeGoldCoin.png" alt="Rupee Gold Coin" />
        </div>
        <div className={styles.stressFreeInvesting}>
          <div>
            <h1 className={styles.h1StressfreeInvesting}>Stress-Free Investing</h1>
          </div>
          <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <button className={styles.joinTheWaitlist}>Join the Waitlist</button>
        </div>
        <div className={styles.fcoin}>
          <Image className={styles.FCoin}
            src="/images/F Coin 2.png" alt="F Coin" width={300} height={300} />
        </div>
        </div>
        <div>
        </div>
          <div className={styles.stressgridItem2}>
            <div className={styles.percentCoin}>
              <Image className={styles.percentCoinImg}
                src="/images/PercentCoin1.png" alt="Percent Coin" width={220} height={220} />
            </div>
            <div className={styles.arrowCoin}>
              <Image className={styles.arrowCoinImg}
                src="/images/Arrow Coin 1.png" alt="Arrow Coin" width={220} height={220} />
            </div>
          </div>
        </div>
      
    </>

  )
}

export default Stressfree