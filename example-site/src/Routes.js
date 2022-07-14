import React from "react";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Routing = () => {
	return (
		<>
		<Router>
			<Routes>
				<Route exact path="/" element={<Home/>} />
				<Route element={<NotFound/>} />
			</Routes>
		</Router>
		</>
	);
};

export default Routing;