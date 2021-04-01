import React from 'react'

function ActionButton({ text, isSecondary, type }) {
	return (
		<button type={type} className={`${isSecondary ? 'bg-dark-denim-faded text-primary' : 'text-white bg-emmy-blue'} ml-3 text-base text-opacity-90 py-2 px-6 rounded-lg flex items-center focus:outline-none focus:ring-2 ring-offset-emmy-blue shadow-sm`}>
			<span className="font-medium">{text}</span>
		</button>
	)
}

export default ActionButton
