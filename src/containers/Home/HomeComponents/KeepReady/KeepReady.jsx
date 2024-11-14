import { keepReadyImg } from "../../../../assets/images";
import keepReadyStyles from "./keepReady.module.css";

export const KeepReady = () => {
	return (
		<>
			<section>
				<div className={keepReadyStyles.imgWrap}>
					<img src={keepReadyImg} alt="img" />
					<div className={keepReadyStyles.contentWrap}>
						<h3>Keep Your Horse Race-Ready</h3>
						<span>with our all-natural, performance-enhancing solutions.</span>
					</div>
				</div>
			</section>
		</>
	);
};
