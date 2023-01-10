import React from "react";

export default function Box({ content }) {
	return (
		<div className="p-4 md:w-1/3">
			<div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
				<div className="flex items-center mb-3">
					<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
						<img src={content.img} alt="Logo" />
					</div>
					<h2 className="text-gray-900 text-lg title-font font-medium">
						{content.title}
					</h2>
				</div>
				<div className="flex-grow">
					<p className="leading-relaxed text-base">{content.text}</p>
					<a
						href={content.linkPath}
						target="_blank"
						className="mt-3 text-indigo-500 inline-flex items-center"
					>
						{content.linkTitle}
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							className="w-4 h-4 ml-2"
							viewBox="0 0 24 24"
						>
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}
