import styles from "/styles/AksharContainer.module.css";
import TeamData from '/pages/api/Data/Team.json'

const AksharContainer = ({ imageIds, smallImageIds }) => {
  return (
    <div className={styles.frameParent}>
      <img className={styles.frameChild} alt="" src={TeamData.src} />
      <div className={styles.frameGroup}>
        <div className={styles.aksharShahParent}>
          <div className={styles.aksharShah}>
            <span>{TeamData.fname}</span>
            <span>{TeamData.lname}</span>
          </div>
          <div className={styles.founderAndCeo}>{TeamData.designation}</div>
        </div>
        <img className={styles.linkedinIcon} alt="" src={TeamData.linkedin} />
      </div>
    </div>
  );
};

export default AksharContainer;
