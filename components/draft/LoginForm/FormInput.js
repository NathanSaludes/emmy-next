export default function FormInput({ type, name, label }) {
	return(
		<div className="flex w-full rounded-lg bg-gray-100 mb-5">
		<input
			className="flex-1 px-4 py-3 w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-300 ring-offset-2 rounded-lg"
			type={type}
			name={name}
			placeholder={label}
		/>
		</div>
	)
}