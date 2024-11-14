import { useEffect, useState } from "react";
import supportHorseStyles from "./supportHorse.module.css";
import { supportProducts } from "../../../../constants";
import { supportHorseImg } from "../../../../assets/images";

export const SupportHorse = () => {
	const [filteredData, setFilteredData] = useState(supportProducts.filter((item) => item.category === "orange"));

	const [id, setId] = useState("orange");

	const filterByCategory = (category) => {
		const newFilteredData = supportProducts.filter((item) => item.category === category);
		setFilteredData(newFilteredData);
	};

	useEffect(() => {
		filterByCategory(id);
	}, [id]);

	return (
		<>
			<section className={supportHorseStyles.supportSection}>
				<div className="container">
					<h3 className={supportHorseStyles.title}>
						<span>Support</span> Your Horse, Head to Hoof
					</h3>
					<span className={supportHorseStyles.des}>Click to learn how our products enhance specific areas.</span>
					<div className={supportHorseStyles.supportHorseContainer}>
						{filteredData.map((productItem) => (
							<div key={productItem.id} className={supportHorseStyles.productCard}>
								<div className={supportHorseStyles.productImg}>
									<img src={productItem.img} alt="img" />
								</div>
								<div>
									<h4 className={supportHorseStyles.productTitle}>{productItem.title}</h4>
									<span className={supportHorseStyles.productDes}>{productItem.des}</span>
									<div className={supportHorseStyles.supportWrap}>
										<span>Supports:</span>
										{productItem.supports.map((supportItem, index) => {
											return (
												<div key={index} className={supportHorseStyles.supportDetailWrap}>
													<div className={supportHorseStyles.supportIcon} style={{ backgroundColor: supportItem.bgColor }}>
														<img src={supportItem.icon} alt="icon" />
													</div>
													<span className={supportHorseStyles.supportText}>{supportItem.text}</span>
												</div>
											);
										})}
									</div>
									<div className={supportHorseStyles.shopWrap}>
										<div className={supportHorseStyles.priceWrap}>
											<span style={{ color: productItem.color }} className={supportHorseStyles.productPrice}>
												{productItem.price}
											</span>
											<span className={supportHorseStyles.productDayPrice}>{productItem.perDay} per day</span>
										</div>
										<button style={{ borderColor: productItem.color, color: productItem.color }} className={supportHorseStyles.shopBtn}>Shop Now
											<span>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						))}
						<div className={supportHorseStyles.horseImgWrap}>
							<img src={supportHorseImg} alt="img" className={supportHorseStyles.horseImg} />
							<button onClick={() => setId("orange")} className={`${id === "orange" && supportHorseStyles.activeBtn} ${supportHorseStyles.orangeBtn} ${supportHorseStyles.catBtn}`}></button>
							<button onClick={() => setId("blue")} className={`${id === "blue" && supportHorseStyles.activeBtn} ${supportHorseStyles.blueBtn} ${supportHorseStyles.catBtn}`}></button>
							<button onClick={() => setId("red")} className={`${id === "red" && supportHorseStyles.activeBtn} ${supportHorseStyles.redBtn} ${supportHorseStyles.catBtn}`}></button>
							<button onClick={() => setId("purple")} className={`${id === "purple" && supportHorseStyles.activeBtn} ${supportHorseStyles.purpleBtn} ${supportHorseStyles.catBtn}`}></button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
