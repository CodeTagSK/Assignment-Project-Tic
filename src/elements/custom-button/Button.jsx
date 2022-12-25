import React from "react";

function Button({ btnText, className }) {
	return (
		<button
			className={`${className} 
			rounded-md 
			sm:hidden 
			grid 
			place-items-center 
			w-full 
			py-5
			bg-yellow-300
			 text-white font-bold`}>
			{btnText}
		</button>
	);
}

export default Button;
