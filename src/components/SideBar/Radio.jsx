import React from "react";

export default function Radio({ color }) {
	return (
		<label
			className={`w-5 h-5 block cursor-pointer mr-1 rounded-full ${color}`}
		>
			<input type="radio" className="hidden" name="color" />
		</label>
	);
}
