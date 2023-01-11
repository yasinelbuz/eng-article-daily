import routes from "@/routes";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
	const sideBarOpen = useSelector((state) => state.theme.sideBarOpen);
	return (
		<div
			className={`relative transition-all  ${
				sideBarOpen ? "left-0" : "-left-[300px]"
			}`}
		>
			{useRoutes(routes)}
		</div>
	);
}

export default App;
