import { serviceData } from "../../../../constants";
import serviceStyles from "./service.module.css";

export const Service = () => {
  return (
    <>
      <section className={serviceStyles.serviceSection}>
        <div className="container">
          <div className={serviceStyles.serviceContainer}>
            {serviceData.map((serviceItem, index) => {
              return (
                <div key={index} className={serviceStyles.serviceDataWrap}>
                  <div className={serviceStyles.imgWrap}>
                    <img src={serviceItem.img} alt="img" />
                  </div>
                  <span className={serviceStyles.serviceText}>{serviceItem.text}</span>
                  <span className={serviceStyles.serviceDes}>{serviceItem.des}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}