import React from 'react'
import style from '/styles/TaxSaver.module.css'

const TaxSaver = () => {
  return (
    <div className={style.TaxSaver}>
      <div className={style.emptyBlock2} />
      <div className={style.TaxSaverContent}>
        <div>
          <h1 className={style.taxHeader}>Tax Saver</h1>
        </div>
        <div className={style.texSaverp}>
          <p>Choose across investments that you can easily withdraw and liquidate in times of need</p>
        </div>
        <div className={style.saveTaxParent}>
          <a className={style.saveTax} href="">Save your tax</a>
        </div>
      </div>
    </div>
  )
}

export default TaxSaver