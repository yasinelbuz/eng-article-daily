import React from "react";
import Radio from "./Radio";
import { updateTextColor } from "@/stores/ThemeSlice";
import colors from "@/utility/color.js";

export default function TextColor() {
	return (
		<div>
			<h2 className="font-bold mb-2">Text Color</h2>
			<div className="flex flex-wrap gap-1">
				{colors.map((color, index) => (
					<Radio
						key={index}
						bgcolor={color.bgColor}
						textcolorr={color.textcolor}
						name="textcolor"
						updateColor={updateTextColor}
					/>
				))}
			</div>
		</div>
	);
}
