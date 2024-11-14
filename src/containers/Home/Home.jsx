import { MainLayout } from "../../layouts";
import { About, CoreProducts, Hero, KeepReady, Perform, Service, StayUpdated, Subscribe, SupportHorse, Trusted } from "./HomeComponents";

export const Home = () => (
	<MainLayout>
		<Hero />
		<About />
		<CoreProducts />
		<KeepReady />
		<SupportHorse />
		<Trusted />
		<Perform />
		<Service />
		<Subscribe />
		<StayUpdated />
	</MainLayout>
);
