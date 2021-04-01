import { useState } from 'react'

function InputField({ label, type, name, placeholder }) {
	const [errorMessage, setErrorMessage] = useState('')

	return (
		<div className="flex flex-col w-full mb-6 text-sm">
			<label className="mb-1 text-main">{label}</label>
			<div className="flex rounded-lg border-none border-emmy-blue-accent border-opacity-30 w-full overflow-hidden focus-within:ring-1">
				<input type={type} placeholder={placeholder} name={name} className="p-4 w-full bg-dark-denim-faded text-primary text-base focus:outline-none placeholder-main placeholder-opacity-50 shadow-sm" />
			</div>
			<div className={`text-xs mt-1 w-full ${errorMessage ? 'flex' : 'hidden'}`}>
				<span className="text-red-400">{errorMessage}</span>
			</div>
		</div>
	)
}

export default InputField