import React from "react";
import Radio from "./Radio";
import { updateBackgroundColor } from "@/stores/ThemeSlice";
import colors from "@/utility/color.js";

export default function BgColor() {
	return (
		<div>
			<h2 className="font-bold mb-2">Background Color</h2>
			<div className="flex flex-wrap gap-1">
				{colors.map((color, index) => (
					<Radio
						key={index}
						bgcolor={color.bgColor}
						textcolor={color.textcolor}
						name="bgColor"
						updateColor={updateBackgroundColor}
					/>
				))}
			</div>
		</div>
	);
}
