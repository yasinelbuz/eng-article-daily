import React from "react";

export default function TextSize() {
	return (
		<div className="mt-4">
			<h2 className="font-bold mb-1">Text Size</h2>
			<button className=" bg-gray-200 h-8 w-8 rounded-lg font-bold mr-2 hover:bg-gray-300">
				-
			</button>
			16px
			<button className=" bg-gray-200 h-8 w-8 rounded-lg font-bold ml-2 hover:bg-gray-300">
				+
			</button>
		</div>
	);
}
