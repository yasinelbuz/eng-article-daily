import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Radio({ name, bgcolor, textcolorr, updateColor }) {
	const dispatch = useDispatch();
	const textColorState = useSelector((state) => state.theme.textColor);
	const backgroundColor = useSelector((state) => state.theme.backgroundColor);

	let checked =
		(name === "bgColor" && bgcolor == backgroundColor) ||
		(name == "textcolor" && textcolorr === textColorState)
			? true
			: false;

	return (
		<label
			className={`w-5 h-5 block cursor-pointer mr-1 rounded-full drop-shadow-md border-[1px] border-gray-300 hover:border-gray-500 transition-all checked:border-blue-700 checked:border-4  ${bgcolor}`}
		>
			<input
				type="radio"
				className="hidden"
				name={name}
				value={name == "textcolor" ? textcolorr : bgcolor}
				onChange={(e) => dispatch(updateColor(e.target.value))}
			/>
		</label>
	);
}
