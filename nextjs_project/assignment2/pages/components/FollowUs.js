import React from 'react'
import Image from 'next/image'
import styles from '/styles/FollowUs.module.css'
import data from '../api/Data/FollowUs.json'

const FollowUs = () => {
  return (
      <div className={styles.FollowUs}>
          <div className={styles.frameParent}>
              <div ClassName={styles.followUsParent}>
                  <div ClassName={styles.header}>
                      <h1 className={styles.header}>{data.followUs.header}</h1>
                  </div>
                  <div className={styles.discoverThePassion}>
                      <p> {data.followUs.content} </p>
                  </div>
              </div>


              <div className={styles.frameGroup}>
                  <div className={styles.youtubeParent}>
                      <Image className={styles.youtubeIcon} src={data.followUs.src1} height={117} width={127} alt="image" />
                  </div>
                  <div className={styles.youtubeParent}>
                      <Image className={styles.LinkedinIcon} src={data.followUs.src2} height={117} width={127} alt="image" />
                  </div>
                  <div className={styles.youtubeParent}>
                      <Image className={styles.telegramIcon} src={data.followUs.src3} height={117} width={127} alt="image" />
                  </div>

              </div>
          </div>
      </div>
  )
}

export default FollowUs