import { Swiper, SwiperSlide } from "swiper/react";
import coreProductStyles from "./coreProducts.module.css";
import { coreProducts } from "../../../../constants";
import { useEffect, useRef, useState } from "react";

export const CoreProducts = () => {
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
			<section className={coreProductStyles.coreProductSection}>
				<div ref={containerRef} className="container">
					<h2 className={coreProductStyles.title}>
						Our <span>Core</span> Products
					</h2>
					<span className={coreProductStyles.des}>Keep your horse race-ready with our all-natural, performance-enhancing solutions.</span>
				</div>

				<div>
					<Swiper style={{ paddingLeft: leftSpace, paddingRight: leftSpace }} className={coreProductStyles.productSlider}
						slidesPerView={3.6}
						spaceBetween={20}
						breakpoints={{
							300: {
								slidesPerView: 1,
							},
							480: {
								slidesPerView: 1.3,
							},
							768: {
								slidesPerView: 2.2,
							},
							1023: {
								slidesPerView: 2.8,
							},
							1365: {
								slidesPerView: 2.9,
							},
							1439: {
								slidesPerView: 3.6,
							},
						}}
					>
						{coreProducts.map((productItem, index) => {
							return (
								<SwiperSlide key={index}>
									<div className={coreProductStyles.productCard}>
										<div className={coreProductStyles.productImg}>
											<img src={productItem.img} alt="img" />
										</div>
										<div>
											<h4 className={coreProductStyles.productTitle}>{productItem.title}</h4>
											<span className={coreProductStyles.productDes}>{productItem.des}</span>
											<div className={coreProductStyles.supportWrap}>
												<span>Supports:</span>
												{productItem.supports.map((supportItem, index) => {
													return (
														<div key={index} className={coreProductStyles.supportDetailWrap}>
															<div className={coreProductStyles.supportIcon} style={{ backgroundColor: supportItem.bgColor }}>
																<img src={supportItem.icon} alt="icon" />
															</div>
															<span className={coreProductStyles.supportText}>{supportItem.text}</span>
														</div>
													);
												})}
											</div>
											<div className={coreProductStyles.shopWrap}>
												<div className={coreProductStyles.priceWrap}>
													<span style={{ color: productItem.color }} className={coreProductStyles.productPrice}>{productItem.price}</span>
													<span className={coreProductStyles.productDayPrice}>{productItem.perDay} per day</span>
												</div>
												<button style={{ borderColor: productItem.color, color: productItem.color }} className={coreProductStyles.shopBtn}>Shop Now
													<span>
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
													</span>
												</button>
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
