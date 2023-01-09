import React from "react";
import TextStyle from "./TextStyle";
import TextSize from "./TextSize";
import BgColor from "./BgColor";
import TextColor from "./TextColor";
import DarkMod from "./DarkMod";
import Title from "./Title";

export default function SetTheme() {
	return (
		<div className="bg-white border-l absolute top-0 right-0 w-[300px] h-full">
			<Title />
			<div className="p-4">
				<TextStyle />
				<TextSize />
				<BgColor />
				<TextColor />
				<DarkMod />
			</div>
		</div>
	);
}
