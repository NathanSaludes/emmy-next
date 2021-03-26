import { useState } from 'react'

function InputField({ label, type, name, placeholder }) {
	const [errorMessage, setErrorMessage] = useState('')

	return (
		<div className="flex flex-col w-full mt-5 text-sm">
			<label className="mb-1 text-main font-medium">{label}</label>
			<div className="flex rounded-lg border-none border-emmy-blue-accent border-opacity-30 w-full h-12 overflow-hidden focus-within:ring-1">
				<input type={type} placeholder={placeholder} name={name} className="p-3 w-full bg-dark-denim-faded text-primary text-sm focus:outline-none placeholder-main placeholder-opacity-50" />
			</div>
			<div className={`text-xs mt-1 w-full ${errorMessage ? 'flex' : 'hidden'}`}>
				<span className="text-red-400">{errorMessage}</span>
			</div>
		</div>
	)
}

export default InputField