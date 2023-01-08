import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Menu() {
	return (
		<div className="flex items-center gap-5">
			<NavLink to="/wordlist" className="hover:underline">
				Kelime Listesi
			</NavLink>
			<NavLink to="/usefullinks" className="hover:underline">
				Faydalı Linkler
			</NavLink>
			<NavLink to="/about" className="hover:underline">
				Hakkında
			</NavLink>
			<a className="p-2 hover:bg-gray-100 hover:border-gray-800 hover:rounded-full">
				<HiDotsHorizontal size="24px" />
			</a>
		</div>
	);
}
