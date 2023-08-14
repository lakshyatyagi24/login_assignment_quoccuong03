import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { RoutesLink } from "./constant";
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path={RoutesLink.Login} Component={Login} />
					<Route path={RoutesLink.DoashBoard} Component={Dashboard} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
