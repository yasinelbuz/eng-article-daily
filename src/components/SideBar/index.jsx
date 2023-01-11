import React from "react";
import TextStyle from "./TextStyle";
import TextSize from "./TextSize";
import BgColor from "./BgColor";
import TextColor from "./TextColor";
import DarkMod from "./DarkMod";
import Title from "./Title";
import { useSelector } from "react-redux";

export default function SetTheme() {
	const sideBarOpen = useSelector((state) => state.theme.sideBarOpen);
	return (
		<div
			className={`bg-white border-l fixed top-0 right-0 w-[300px] h-full transition-all overflow-auto select-none ${
				sideBarOpen ? "-right-[300px]" : "right-0"
			}`}
		>
			<Title />
			<div className="p-4 flex flex-col gap-4">
				<TextStyle />
				<TextSize />
				<BgColor />
				<TextColor />
			</div>
		</div>
	);
}
