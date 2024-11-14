import { heroImg } from "../../../../assets/images";
import { serviceList } from "../../../../constants";
import heroStyles from "./hero.module.css";

export const Hero = () => {
	return (
		<>
			<section className={heroStyles.heroSection}>
				<div className={heroStyles.heroImgWrap}>
					<img src={heroImg} alt="hero" className={heroStyles.heroImg} />

					<div className={heroStyles.heroContentWrap}>
						<div className="container">
							<span className={heroStyles.matterText}>Microseconds Matter</span>
							<h1 className={heroStyles.heroText}>Win your horserace with TTL supplements</h1>
							<span className={heroStyles.heroDes}>Scientifically formulated racehorse supplements from the home of champions</span>
							<button className={heroStyles.heroBtn}>Discover</button>
						</div>
					</div>

					<div className={heroStyles.servicesContainer}>
						{serviceList.map((serviceItem, index) => {
							return (
								<div key={index} className={heroStyles.serviceWrap}>
									<div className={heroStyles.serviceIcon}>
										<img src={serviceItem.icon} alt="icon" />
									</div>
									<span>{serviceItem.text}</span>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};
