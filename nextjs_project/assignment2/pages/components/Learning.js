import React from 'react'
import styles from '/styles/Learning.module.css'
import Image from 'next/image';
import { Card, Grid, Row, Text } from "@nextui-org/react";
import LearningCard from './LearningCard'

const Learning= () => {
  return (
    
    
      <div className={styles.Learning}>
        <div className={styles.learningContent}>
          <div className={styles.writtenContent}>
          <div className={styles.learnHeading}>
            Keep Learning. Keep Growing.
          </div>
          <div className={styles.learnP}>
            <p className={styles.p}>Insights and Strategies for Mastering Your Finances: 
            Stay Up-to-Date with the Latest Trends, Tips, and Techniques to Take Control of Your Money</p>
          </div>
          </div>
          <div className={styles.learningCard}>
          <LearningCard/>
          </div>
          
         {/* <div className={styles.card}>
        {data.map((postDetail, index) => {
              return <div>
                
                <div className={styles.cardbody}>
                  <Image className ={styles.Img} src={postDetail.src} height={203} width={296} alt="image"/>
                </div>  
                <h1 className={styles.header}>
                {postDetail.heading}
                </h1>
                <p className={styles.content}>
                  {postDetail.content}</p>
                {postDetail.date} 
              </div>
            })}
        </div>
        <div>
          <button className={styles.btnMoreInsight}>More insight</button>
        </div> */} 
        
        </div>
        </div>

  )
}

export default Learning