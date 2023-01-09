import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Menu() {
	return (
		<div className="flex items-center">
			<NavLink to="/wordlist" className="py-2 px-3">
				Kelime Listesi
			</NavLink>
			<NavLink to="/usefullinks" className="py-2 px-3">
				Faydalı Linkler
			</NavLink>
			<NavLink to="/about" className="py-2 px-3">
				Hakkında
			</NavLink>
			<a className="py-2 px-3 hover:bg-gray-100 hover:border-gray-800 hover:rounded-full">
				<HiDotsHorizontal size="24px" />
			</a>
		</div>
	);
}
