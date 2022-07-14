import React from "react";
import TestLineChart from "../components/simplelinechart";
import TestAreaChart from "../components/stackedareachart";
import TestScatterChart from "../components/scatterchart";

const Home = () => {
	return (
		<div>
			<TestLineChart />
			<TestAreaChart />
			<TestScatterChart />
		</div>
	);
};

export default Home;