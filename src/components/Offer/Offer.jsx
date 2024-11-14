import { Link } from "react-router-dom";
import { Icons } from "../Icons/Icons";
import offerStyles from "./offer.module.css";

export const Offer = () => {
	return (
		<>
			<div className={offerStyles.offerContainer}>
				<div className="container">
					<div className={offerStyles.offerWrap}>
						<span className={`img-box contain-img ${offerStyles.flashIcon}`}>{Icons.flash}</span>
						<Link to="/" className={offerStyles.offerLink}>UNLOCK THE PRE-RACE PASTE</Link>
            <span className={offerStyles.offerDes}>Find the sprint to be finish! 1 FREE with a 7 pack</span>
					</div>
				</div>
			</div>
		</>
	);
};
