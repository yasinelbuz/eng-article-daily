import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sideBarOpenClick } from "@/stores/ThemeSlice";

export default function Menu() {
	const open = useSelector((state) => state.theme.sideBarOpen);
	const dispatch = useDispatch();

	return (
		<div className="flex items-center">
			<NavLink to="/" className="py-2 px-3">
				Home
			</NavLink>
			<NavLink to="/usefullinks" className="py-2 px-3">
				Useful Links
			</NavLink>
			<NavLink to="/about" className="py-2 px-3">
				About
			</NavLink>
			<span>
				<HiDotsHorizontal
					className="HiDotsHorizontal"
					onClick={() => dispatch(sideBarOpenClick(!open))}
				/>
			</span>
		</div>
	);
}
