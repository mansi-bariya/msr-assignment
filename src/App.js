import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routeList } from "./routes";
import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				{routeList.map((routeItem, routeIndex) => {
					return <Route path={routeItem.path} element={routeItem?.component} key={`route-${routeIndex}`} />;
				})}
			</Routes>
		</Router>
	);
}

export default App;
