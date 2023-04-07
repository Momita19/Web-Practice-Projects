import React from 'react'
import styles from 'styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.footerParent}>
      <div className={styles.footerChild} />
      <div className={styles.fixerraPvtLtd}>© 2023 Fixerra Pvt Ltd</div>
      <div className={styles.frameParent}>
        <Image className={styles.frameIcon} src="images/Footer/utube.svg" width={24} height={24} alt=""/>
        <Image className={styles.frameIcon} src="images/Footer/fb.svg" width={24} height={24} alt="" />
        <Image className={styles.frameIcon}  src="images/Footer/linkedin.svg" width={24} height={24} alt=""/>
      </div>
      <div className={styles.wantToTalkParent}>
        <div className={styles.wantToTalk}>Want to talk?</div>
        <div className={styles.callUsAnd}>
          Call us and we will solve all your doubts and help you grow your
          business
        </div>
        <div className={styles.phoneParent}>
          <Image className={styles.frameIcon} alt="" src="images/Footer/Phone.svg" width={24} height={24} />
          <div className={styles.invest}>Call +91 9876543210</div>
        </div>
      </div>
      <div className={styles.investParent}>
        <div className={styles.invest}>Invest</div>
        <div className={styles.fdBazaarParent}>
          <div className={styles.invest}>FD Bazaar</div>
          <div className={styles.invest}>Savings ++</div>
          <div className={styles.invest}>Tax Saver</div>
          <div className={styles.invest}>Regular Income</div>
        </div>
      </div>
      <div className={styles.companyParent}>
        <div className={styles.invest}>Company</div>
        <div className={styles.fdBazaarParent}>
          <div className={styles.invest}>About Us</div>
          <div className={styles.invest}>Career</div>
          <div className={styles.invest}>Features</div>
          <div className={styles.invest}>Mission</div>
          <div className={styles.invest}>{`Need & Support`}</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <img className={styles.frameIcon3} alt="" src="/images/footerLogo.svg" />
        <div className={styles.callUsAnd}>
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </div>
      </div>
    </div>
  
  )
}

export default Footer
