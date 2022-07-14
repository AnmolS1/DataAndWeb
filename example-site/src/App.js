import React, { useEffect } from "react";
import Routing from "./Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div>
			<ScrollToTop />
			<Routing />
		</div>
	);
};

export default App;