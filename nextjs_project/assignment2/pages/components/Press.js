import React from 'react'
import data from '../api/Data/Press.json'
import styles from '/styles/Press.module.css'
import Image from 'next/image'

const Press = () => {
  return (
    <div className={styles.screenInner}>
      {/* <div className={styles.PressParent}> */}
        <div className={styles.inThePressParent}>
          <div className={styles.inThePress}>{data.Press.header}</div>
          <div className={styles.discoverThePassion}>
            {data.Press.content}
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.YourStoryIcon}
                alt=""
                src={data.Press.src1} width ={285} height={102}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.news18Icon}
                alt=""
                src="/images/Press/News18.svg"  width ={289} height={116}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.livemintIcon}
                alt=""
                src={data.Press.src3} width ={306} height={94}
              />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Press