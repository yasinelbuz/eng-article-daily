import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { textSizeIncrement, textSizeDecrement } from "@/stores/ThemeSlice";

export default function TextSize() {
	const textSize = useSelector((state) => state.theme.textSize);
	const navigate = useDispatch();

	return (
		<div className="mt-4">
			<h2 className="font-bold mb-1">Text Size</h2>
			<button
				className=" bg-gray-200 h-8 w-8 rounded-lg font-bold mr-2 hover:bg-gray-300"
				onClick={() => navigate(textSizeDecrement())}
			>
				-
			</button>
			{textSize}px
			<button
				className=" bg-gray-200 h-8 w-8 rounded-lg font-bold ml-2 hover:bg-gray-300"
				onClick={() => navigate(textSizeIncrement())}
			>
				+
			</button>
		</div>
	);
}
