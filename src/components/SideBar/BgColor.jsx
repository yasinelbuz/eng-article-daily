import React from "react";
import Radio from "./Radio";

const colors = [
	"bg-gray-50",
	"bg-gray-100",
	"bg-gray-200",
	"bg-gray-300",
	"bg-gray-400",
	"bg-gray-500",
	"bg-gray-600",
	"bg-gray-700",
	"bg-gray-800",
	"bg-gray-900",
	"bg-black",
	"bg-blue-50",
	"bg-blue-100",
	"bg-blue-200",
	"bg-blue-300",
	"bg-blue-400",
	"bg-blue-500",
	"bg-blue-600",
	"bg-blue-700",
	"bg-blue-800",
	"bg-blue-900",
	"bg-pink-50",
	"bg-pink-100",
	"bg-pink-200",
	"bg-pink-300",
	"bg-pink-400",
	"bg-pink-500",
	"bg-pink-600",
	"bg-pink-700",
	"bg-pink-800",
	"bg-pink-900",
	"bg-purple-50",
	"bg-purple-100",
	"bg-purple-200",
	"bg-purple-300",
	"bg-purple-400",
	"bg-purple-500",
	"bg-purple-600",
	"bg-purple-700",
	"bg-purple-800",
	"bg-purple-900",
	"bg-stone-50",
	"bg-stone-100",
	"bg-stone-200",
	"bg-stone-300",
	"bg-stone-400",
	"bg-stone-500",
	"bg-stone-600",
	"bg-stone-700",
	"bg-stone-800",
	"bg-stone-900",
	"bg-orange-50",
	"bg-orange-100",
	"bg-orange-200",
	"bg-orange-300",
	"bg-orange-400",
	"bg-orange-500",
	"bg-orange-600",
	"bg-orange-700",
	"bg-orange-800",
	"bg-orange-900",
];

export default function BgColor() {
	return (
		<div className="my-4">
			<h2 className="font-bold mb-2 bg-">Bacground Color</h2>
			<div className="flex flex-wrap gap-1">
				{colors.map((color) => (
					<Radio color={color} />
				))}
			</div>
		</div>
	);
}
