import React from 'react';
import data from '../api/Data/Announcement.json'
import Image from 'next/image';
// import styles from '../styles/announcement.css'

//step1: collect all the data from announcement directory
//step2: Interate through them ad display the
const Announcement = () => {
  return (
    <div Id="announcement">
        {/* {data.content.body.map(block => Components(block))}
 */}
        <Image src={data.announce.src} height={24} width={24} alt="image"/> 
        <p> {data.announce.content} </p>
        
    </div>
  )
}

export default Announcement