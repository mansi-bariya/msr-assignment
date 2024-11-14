import { Offer, Header, Footer } from "../../components";

export const MainLayout = ({ children, contentWrapperClasses, mainWrapperClasses }) => (
	<>
		<Offer />
		<Header />
		<div>{children}</div>
		<Footer />
	</>
);
