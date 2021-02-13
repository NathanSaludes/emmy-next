export default function Badge({ label, color }) {
	return (
		<span className={`uppercase py-1 px-2 ${color && color} text-sm text-white text-opacity-70 rounded font-semibold`}>
			{label}
		</span>
	)
}