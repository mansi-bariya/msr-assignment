import { subscribeImg } from "../../../../assets/images";
import { subscribeList } from "../../../../constants";
import subscribeStyles from "./subscribe.module.css";

export const Subscribe = () => {
  return (
    <>
      <section className={subscribeStyles.subscribeSection}>
        <div className="container">
          <div className={subscribeStyles.subscribeContainer}>
            <div className={subscribeStyles.subscribeContentWrap}>
              <h3 className={subscribeStyles.title}><span>Subscribe</span> & Save</h3>
              <span className={subscribeStyles.des}>Lorem ipsum dolor sit amet consectetur.</span>
              <div className={subscribeStyles.subscribeListContainer}>
                {subscribeList.map((listItem, index) => {
                  return (
                    <div key={index} className={subscribeStyles.subscribeList}>
                      <div className={subscribeStyles.iconWrap}>
                        <img src={listItem.icon} alt="icon" />
                      </div>
                      <span className={subscribeStyles.text}>{listItem.text}</span>
                    </div>
                  )
                })}
              </div>
              <button className={subscribeStyles.heroBtn}>Discover</button>
            </div>
            <div className={subscribeStyles.imgContainer}>
              <img src={subscribeImg} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}