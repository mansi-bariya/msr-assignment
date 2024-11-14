import { gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, rightArrow } from "../../../../assets/images";
import stayUpdatedStyles from "./stayUpdated.module.css";
import { Icons } from "../../../../components";

export const StayUpdated = () => {
  return (
    <>
      <section className={stayUpdatedStyles.section}>
        <div className="container">
          <div className={stayUpdatedStyles.updateContainer}>
            <div className={stayUpdatedStyles.galleryWrap}>
              <div className={`${stayUpdatedStyles.one} ${stayUpdatedStyles.galleryImg}`}>
                <img src={gallery1} alt="img" />
              </div>
              <div className={`${stayUpdatedStyles.two} ${stayUpdatedStyles.galleryImg}`}>
                <img src={gallery2} alt="img" />
              </div>
              <div className={`${stayUpdatedStyles.three} ${stayUpdatedStyles.galleryImg}`}>
                <img src={gallery3} alt="img" />
              </div>
              <div className={`${stayUpdatedStyles.four} ${stayUpdatedStyles.galleryImg}`}>
                <img src={gallery4} alt="img" />
              </div>
              <div className={`${stayUpdatedStyles.five} ${stayUpdatedStyles.galleryImg}`}>
                <img src={gallery5} alt="img" />
              </div>
              <div className={`${stayUpdatedStyles.six} ${stayUpdatedStyles.galleryImg}`}>
                <img src={gallery6} alt="img" />
              </div>
            </div>
            <div className={stayUpdatedStyles.stayUpdatedRight}>
              <h3 className={stayUpdatedStyles.title}>Stay Ahead of the Pack</h3>
              <span className={stayUpdatedStyles.des}>Sign up for tips, offers, and more</span>
              <input type="email" placeholder="Type your email" className={stayUpdatedStyles.input} />
              <button className={stayUpdatedStyles.aboutBtn}>Subsribe Now <img src={rightArrow} alt="arrow" /></button>
              <div className={stayUpdatedStyles.socialIconWrap}>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  {Icons.facebook}
                </a>
                <a href="https://x.com/?lang=en" target="_blank" rel="noreferrer">
                  {Icons.twitter}
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  {Icons.instagram}
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  {Icons.linkedIn}
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                  {Icons.youTube}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}