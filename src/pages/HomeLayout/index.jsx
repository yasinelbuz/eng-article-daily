import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
import SetTheme from "@/components/SideBar";

export default function HomeLayout() {
	return (
		<>
			<Header />
			<SetTheme />
			<Outlet />
		</>
	);
}
