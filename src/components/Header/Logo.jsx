import React from "react";
import { NavLink } from "react-router-dom";

export default function Logo() {
	return (
		<NavLink to="/">
			<div className="bg-black text-white px-4 py-1">
				eng article <b>daily</b>
			</div>
		</NavLink>
	);
}
