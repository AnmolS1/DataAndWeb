import { createRoot } from "react-dom/client";
import App from "./App";
// import "./assets/scss/style.scss";
// import reportWebVitals from "./reportWebVitals";

createRoot(document.getElementById('root')).render(
	<App />,
	document.body.classList.add("loaded")
);

// reportWebVitals(console.log);