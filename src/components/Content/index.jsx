import React from "react";
import Article from "./Article";
import Statistics from "./Statistics";

export default function Content() {
	return (
		<div className="w-[600px]  mx-auto my-10">
			<Article />
			<Statistics />
		</div>
	);
}
