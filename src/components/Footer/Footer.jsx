import { Link } from "react-router-dom";
import { drugFreeImg } from "../../assets/images";
import footerStyles from "./footer.module.css";

export const Footer = () => {
  return (
    <>
      <footer className={footerStyles.footer}>
        <div className="container">
          <div className={footerStyles.footerContainer}>
            <div className={footerStyles.footerLeft}>
              <img src={drugFreeImg} alt="img" />
              <div>
                <h5 className={footerStyles.title}><span>Trust</span> in Every Scoop</h5>
                <span className={footerStyles.des}>Non-swabbale formulas for your peace of mind</span>
              </div>
            </div>
            <div className={footerStyles.footerRight}>
              <div>
                <h6 className={footerStyles.heading}>Quick Links</h6>
                <Link to="/" className={footerStyles.footerLink}>Shop</Link>
                <Link to="/" className={footerStyles.footerLink}>About</Link>
                <Link to="/" className={footerStyles.footerLink}>Bundles</Link>
                <Link to="/" className={footerStyles.footerLink}>Contact</Link>
              </div>
              <div>
                <h6 className={footerStyles.heading}>Contact us</h6>
                <a href="mailto:contact@company.com" className={footerStyles.footerContactLink}>
                  <span>
                    <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.5067 0.318359H2.61185C1.38158 0.318359 0.386184 1.24548 0.386184 2.37862L0.375 14.7402C0.375 15.8733 1.38158 16.8004 2.61185 16.8004H20.5067C21.737 16.8004 22.7435 15.8733 22.7435 14.7402V2.37862C22.7435 1.24548 21.737 0.318359 20.5067 0.318359ZM20.5067 4.43888L11.5593 9.58953L2.61185 4.43888V2.37862L11.5593 7.52927L20.5067 2.37862V4.43888Z" fill="currentColor" />
                    </svg>
                  </span>
                  contact@company.com
                </a>
                <a href="tel:(414)687-5892" className={footerStyles.footerContactLink}>
                  <span>
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.82111 8.86536C5.34111 11.8526 7.79 14.2909 10.7772 15.8215L13.0994 13.4992C13.3844 13.2142 13.8067 13.1192 14.1761 13.2459C15.3583 13.6365 16.6356 13.8476 17.9444 13.8476C18.525 13.8476 19 14.3226 19 14.9031V18.587C19 19.1676 18.525 19.6426 17.9444 19.6426C8.03278 19.6426 0 11.6098 0 1.69813C0 1.11758 0.475 0.642578 1.05556 0.642578H4.75C5.33056 0.642578 5.80556 1.11758 5.80556 1.69813C5.80556 3.01758 6.01667 4.28425 6.40722 5.46647C6.52333 5.83591 6.43889 6.24758 6.14333 6.54313L3.82111 8.86536Z" fill="currentColor" />
                    </svg>
                  </span>
                  (414) 687 - 5892
                </a>
                <a href="https://maps.app.goo.gl/WWwCtAJF4MdhvP4E8" className={footerStyles.footerContactLink}>
                  <span>
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1_928)">
                        <path d="M11.5052 2.55762C7.79646 2.55762 4.79688 5.5572 4.79688 9.26595C4.79688 14.2972 11.5052 21.7243 11.5052 21.7243C11.5052 21.7243 18.2135 14.2972 18.2135 9.26595C18.2135 5.5572 15.214 2.55762 11.5052 2.55762ZM11.5052 11.6618C10.1827 11.6618 9.10938 10.5885 9.10938 9.26595C9.10938 7.94345 10.1827 6.87012 11.5052 6.87012C12.8277 6.87012 13.901 7.94345 13.901 9.26595C13.901 10.5885 12.8277 11.6618 11.5052 11.6618Z" fill="currentColor" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_928">
                          <rect width="23" height="23" fill="white" transform="translate(0 0.642578)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  794 Mcallister St San Francisco, 94102
                </a>
              </div>
            </div>
          </div>
          <div className={footerStyles.footerBottom}>
            <span className={footerStyles.copyRight}>Copyright © 2024 The Trainer Locker</span>
            <div className={footerStyles.footerBottomRight}>
              <span className={footerStyles.reserved}>All Rights Reserved</span>
              <Link to="/" className={footerStyles.impLink}>| Terms and Conditions</Link>
              <Link to="/" className={footerStyles.impLink}>| Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}