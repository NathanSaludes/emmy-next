import React from 'react'

function ActionButton({ text, isSecondary, type }) {
	return (
		<button type={type} className={`${isSecondary ? 'bg-none border border-main border-opacity-25 text-primary' : 'text-white bg-emmy-blue shadow-md'} ml-2 text-sm text-opacity-90 py-3 px-6 rounded-lg flex items-center focus:outline-none focus:ring-2 ring-offset-emmy-blue font-medium`}>
			<span>{text}</span>
		</button>
	)
}

export default ActionButton
