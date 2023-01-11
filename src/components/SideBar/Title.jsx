import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { sideBarOpenClick } from "@/stores/ThemeSlice";

export default function Title() {
	const open = useSelector((state) => state.theme.sideBarOpen);
	const dispatch = useDispatch();
	return (
		<div className="border-b border-[#efefef] h-[60px] flex  justify-between items-center px-4 select-none">
			<span className="font-bold">THEME</span>
			<AiOutlineClose
				title="Close"
				className="AiOutlineClose"
				onClick={() => dispatch(sideBarOpenClick(!open))}
			/>
		</div>
	);
}
