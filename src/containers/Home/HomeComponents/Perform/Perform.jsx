import { rightArrow } from "../../../../assets/images";
import performStyles from "./perform.module.css";

export const Perform = () => {
  return (
    <>
      <section className={performStyles.performanceSection}>
        <div className={performStyles.performanceImg}>
          {/* <img src={performanceImg} alt="img" className={performStyles.performImg} /> */}
          <div className={performStyles.performContainer}>
            <div className="container">
              <h3 className={performStyles.title}>Race-ready performance starts now</h3>
              <p className={performStyles.des}>TTL racehorse supplements are uniquely formulated in the United States – the most competitive horse racing arena in the world – to give your horses the stamina and health they need to push the limits for the win.</p>
              <h3 className={performStyles.info}>Plus, they’re 100% drug-free, so you can confidently train</h3>
              <button className={performStyles.aboutBtn}>Get Started Today! <img src={rightArrow} alt="arrow" /></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}