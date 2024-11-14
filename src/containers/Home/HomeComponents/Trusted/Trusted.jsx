import { Swiper, SwiperSlide } from "swiper/react";
import trustedStyles from "./trusted.module.css";
import { trustData } from "../../../../constants";
import { useEffect, useRef, useState } from "react";

export const Trusted = () => {
	const containerRef = useRef(null);
	const [leftSpace, setLeftSpace] = useState(0);

	useEffect(() => {
		const updateLeftSpace = () => {
			if (containerRef.current) {
				setLeftSpace(containerRef.current.getBoundingClientRect().left + 15);
			}
		};

		updateLeftSpace();
		window.addEventListener("resize", updateLeftSpace);

		return () => {
			window.removeEventListener("resize", updateLeftSpace);
		};
	}, []);

	return (
		<>
			<section className={trustedStyles.trustSection}>
				<div ref={containerRef} className="container">
					<h3 className={trustedStyles.title}>
						<span>Trusted by trainers</span> <br /> across New Zealand and Australia
					</h3>
					<span className={trustedStyles.des}>Outperform the competition. Your horse’s energy, stamina, and recovery can be the 1% difference between first and second place. Combat fatigue, muscle stiffness, and cramping with TTL’s top-selling products, formulated for optimal performance and endurance.</span>
				</div>

				<div>
					<Swiper style={{ paddingLeft: leftSpace, paddingRight: leftSpace }} className={trustedStyles.trustSlider}
						slidesPerView={3.7}
						spaceBetween={22}
						breakpoints={{
							310: {
								slidesPerView: 1,
							},
							480: {
								slidesPerView: 1.3,
							},
							768: {
								slidesPerView: 2.4,
							},
							1023: {
								slidesPerView: 3.1,
							},
							1439: {
								slidesPerView: 3.7,
							},
						}}
					>
						{trustData.map((trustItem, index) => {
							return (
								<SwiperSlide
									key={index}
								>
									<div className={trustedStyles.trustCard}>
										<div className={trustedStyles.trustImgWrap}>
											<img src={trustItem.img} alt="img" />
										</div>
										<p className={trustedStyles.trustDes}>{trustItem.des}</p>
										<div className={trustedStyles.personWrap}>
											<div className={trustedStyles.perImgWrap}>
												<img src={trustItem.perImg} alt="img" />
											</div>
											<div>
												<span className={trustedStyles.perName}>{trustItem.name}</span>
												<span className={trustedStyles.designation}>{trustItem.designation}</span>
											</div>
										</div>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</section>
		</>
	);
};
