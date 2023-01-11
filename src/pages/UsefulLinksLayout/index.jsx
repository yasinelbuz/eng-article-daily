import React from "react";
import Title from "./Title";
import Box from "./Box";
import usefulLinksContent from "@/Content/usefulLinks";

export default function UsefulLinks() {
	return (
		<div>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<Title />

					<div className="flex flex-wrap -m-4">
						{usefulLinksContent.map((content) => (
							<Box content={content} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
