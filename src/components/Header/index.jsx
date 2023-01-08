import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
	return (
		<div className="flex justify-between h-[60px] border-b border-[#efefef] items-center px-5">
			<Logo />
			<Menu />
		</div>
	);
}
