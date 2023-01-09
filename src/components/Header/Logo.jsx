import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<Link to="/">
			<div className="bg-black text-white px-4 py-1">
				eng article <b>daily</b>
			</div>
		</Link>
	);
}
