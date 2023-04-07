import React from 'react'
import styles from '/styles/Team.module.css'
import Teamdata from '/pages/api/Data/Team.json'
import Image from 'next/image'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Card, Grid, Row, Text } from "@nextui-org/react";
import data from '../api/Data/Learning.json'
const cardStyle = { width: "19.5rem", height: "28.125rem" };

const Team = () => {
  return (
    <div className={styles.Team}>
      <div className={styles.teamFrame}>
        <div className={styles.contentParent}>
          <div className={styles.content}>
            Meet the Team
          </div>

          <div className={styles.para}>
            Discover the passion, expertise, and values that drive our
            team and fuel their commitment to excellence.
          </div>
        </div>
        <div>
        {Teamdata.src}    
        </div>
        {/* content part end */}
        <div className={styles.card}>
          <div className={styles.cardContainer}>
          <div className={styles.cardIndividual}>
              <div className={styles.cardwrapper}>
                
  <div className={styles.quotationParent}>
        {Teamdata.id1}    
<img
                className={styles.quotationIcon}
                alt=""
                src="/quotation.svg"
              />
              <img
                className={styles.quotationIcon1}
                alt=""
                src="/quotation1.svg"
              />
              <div className={styles.ourVisionIs}>
                Our vision is to make safe investments with better returns
                easily accessibly to all indians
              </div>
</div>





          {/* <div className={styles.textFrame}>Our vision is to make safe investments 
          with better returns easily accessibly to all indians</div> */}
          
          {/* {TeamData.map((postDetail, index) => {
            return <div>
              


             <div>
                <Image className={styles.src}src={postDetail.src} height={246} width={282} alt="image" />
              </div>
              <h1 className={styles.name}>
                {postDetail.fname} {postDetail.lname}
              </h1>
              <p>{postDetail.designation}</p>
              <Image src={postDetail.linkedin} height={24} width={24} alt="image" />
            </div>
          })} */}
           </div>
           
          
        </div>
      </div>
    </div>
    </div>
    </div>



  )
}

export default Team