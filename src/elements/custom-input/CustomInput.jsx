import React from "react";

function CustomInput({
	placeholder,
	label,
	containerClass,
	inputChange,
	id,
	type,
	...rest
}) {
	return (
		<div className={containerClass}>
			{label && <label className={` font-bold text-sm`}>{label}</label>}
			<input
				className="bg-slate-200 rounded-lg p-4 w-full mt-4"
				type={type}
				name=""
				id={id}
				placeholder={placeholder}
				onChange={inputChange}
				{...rest}
			/>
		</div>
	);
}

export default CustomInput;
