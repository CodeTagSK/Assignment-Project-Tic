import React from "react";

function CustomInput({ placeholder, label, containerClass }) {
	return (
		<div className={containerClass}>
			{label && <label className={` font-bold text-sm`}>{label}</label>}
			<input
				className="bg-slate-200 rounded-lg p-4 w-full mt-4"
				type="text"
				name=""
				id=""
				placeholder={placeholder}
			/>
		</div>
	);
}

export default CustomInput;
