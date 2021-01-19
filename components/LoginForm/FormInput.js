import React from 'react';

export default function FormInput({ type, name, label, icon }) {
	return(
		<div className="flex items-center w-full rounded-lg bg-gray-200 mb-5 relative">
			{React.cloneElement(icon, {className: "absolute text-gray-400 ml-3"})}
			<input
				className="flex-1 text-sm text-gray-600 pr-4 pl-10 py-5 w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-300 ring-offset-2 rounded-lg tracking-tight"
				type={type}
				name={name}
				placeholder={label}
			/>
		</div>
	)
}