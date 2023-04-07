import InvestmentContainer from "./investment-container";
import styles from "/styles/Fixed-container.module.css";

const Fixed = () => {
  return (
    <div className={styles.fixed}>
      <div className={styles.frame}>
        <div className={styles.whyFixedMain}>
          <div className={styles.whyFixed}>Why Fixed ?</div>
          <div className={styles.para}>
            Choose across investments that you can easily withdraw and liquidate
            in times of need
          </div>
        </div>
        <div className={styles.frameGrp}>
          
          <InvestmentContainer
            investmentText="/frame-282.svg"
            investmentOptionsText="Safe investments that beat inflation"
            lowRiskHighReturnText="Low risk, High return investments that are easy to understand"
          />
          <InvestmentContainer
            investmentText="/frame-284.svg"
            investmentOptionsText="Safe investments that protect capital"
            lowRiskHighReturnText="Get access to stable and low risk investment options for goals where you cannot afford losses"
          />
          <InvestmentContainer
            investmentText="/frame-283.svg"
            investmentOptionsText="Liquid investments to manage emergencies"
            lowRiskHighReturnText="Choose across investments that you can easily withdraw and liquidate in times of need"
          />
        </div>
      </div>
    </div>
  );
};

export default Fixed;
