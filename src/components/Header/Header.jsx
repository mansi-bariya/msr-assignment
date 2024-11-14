import { Link } from "react-router-dom";
import headerStyles from "./header.module.css";
import { logoImg } from "../../assets/images";
import { headerLinkList, headerOtherLinkList } from "../../constants";
import { useEffect, useState } from "react";

export const Header = () => {
	//toggle-menu
	const [openMenu, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		const body = document.querySelector("html");
		// setMenuOpen(openMenu);
		// body.classList.toggle("showMenu");
		setMenuOpen((prevOpenMenu) => {
			const newMenuState = !prevOpenMenu;
			body.classList.toggle("showMenu", newMenuState);
			return newMenuState;
		});
	};

	//sticky-header
	const [scrolling, setScrolling] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<>
			<header className={`${scrolling ? headerStyles.darkHeader : headerStyles.transparentHeader} ${headerStyles.header}`}>
				<div className="container">
					<div className={headerStyles.headerWrap}>
						<Link to="/" className={headerStyles.logo}>
							<img src={logoImg} alt="logo" />
						</Link>
						<div className={`${headerStyles.linkContainer} ${openMenu ? headerStyles.translateX0 : headerStyles.translateX110}`}>
							<div className={headerStyles.headerLinkWrap}>
								{headerLinkList.map((linkItem, index) => {
									return (
										<Link key={index} to={linkItem.url} className={headerStyles.navLink}>
											{linkItem.text}
										</Link>
									);
								})}
							</div>
							<div className={headerStyles.otherLinkWrap}>
								{headerOtherLinkList.map((linkItem, index) => {
									return (
										<Link key={index} to={linkItem.url} className={`img-box contain-img ${headerStyles.otherLink}`}>
											{linkItem.icon}
										</Link>
									);
								})}
							</div>
						</div>
						<div className={headerStyles.hamburgerWrap}>
							<button onClick={toggleMenu} type="button" className={`${headerStyles.hamburger} ${openMenu && headerStyles.showMenu}`}>
								<span className={headerStyles.line}></span>
								<span className={headerStyles.line}></span>
								<span className={headerStyles.line}></span>
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};
