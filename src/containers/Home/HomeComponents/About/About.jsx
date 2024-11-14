import { rightArrow } from "../../../../assets/images";
import { aboutUs } from "../../../../constants";
import aboutStyles from "./about.module.css";

export const About = () => {
	return (
		<>
			<section className={aboutStyles.aboutSection}>
				<div className="container">
					{aboutUs.map((aboutItem, index) => {
						return (
							<div key={index} className={aboutStyles.aboutContainer}>
								<div className={aboutStyles.aboutContent}>
									<h3 className={aboutStyles.tagline}>{aboutItem.tagline}</h3>
									<h2 className={aboutStyles.title}>{aboutItem.title}</h2>
									<p className={aboutStyles.des}>{aboutItem.des}</p>
									<button className={aboutStyles.aboutBtn}>Get Race Ready <img src={rightArrow} alt="arrow" /></button>
								</div>
								<div className={aboutStyles.imgWrap}>
									<img src={aboutItem.img} alt="img" />
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};
