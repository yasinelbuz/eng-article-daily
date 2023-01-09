import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Title() {
	return (
		<div className="border-b border-[#efefef] h-[60px] flex  justify-between items-center px-4">
			<span className="font-bold">TEMA</span>
			<AiOutlineClose title="Close" className="AiOutlineClose" />
		</div>
	);
}
