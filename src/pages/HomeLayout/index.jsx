import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
