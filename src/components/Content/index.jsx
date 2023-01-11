import React from "react";
import Article from "./Article";
import Statistics from "./Statistics";
import { useSelector } from "react-redux";

export default function Content() {
	const { backgroundColor, textColor, textSize } = useSelector(
		(state) => state.theme
	);
	return (
		<section
			className={`${backgroundColor} ${textColor}`}
			style={{
				fontSize: `${textSize}` + "px",
			}}
		>
			<div className="w-[700px] mx-auto py-10">
				<Article />
				<Statistics />
			</div>
		</section>
	);
}
