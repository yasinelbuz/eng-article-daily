import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Menu() {
	return (
		<div className="flex items-center">
			<NavLink to="/usefullinks" className="py-2 px-3">
				Useful Links
			</NavLink>
			<NavLink to="/about" className="py-2 px-3">
				About
			</NavLink>
			<span>
				<HiDotsHorizontal className="HiDotsHorizontal" />
			</span>
		</div>
	);
}
