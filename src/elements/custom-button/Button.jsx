import React from "react";

function Button({ btnText, className, type, onClick, ...rest }) {
	return (
		<button
			className={`${className} 
			rounded-md 
			sm:hidden 
			grid 
			place-items-center 
			w-full
			 text-white font-bold`}
			type={type}
			onClick={onClick}
			{...rest}>
			{btnText}
		</button>
	);
}

export default Button;
