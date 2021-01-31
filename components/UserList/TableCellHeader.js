export default function TableCellHeader({ label, primary }) {
	return (
		<div className={`${!primary ? 'hidden md:table-cell' : 'table-cell'} py-4 border-b-2 border-opacity-20 border-main text-sm text-primary font-semibold capitalize`}>{label}</div>
	)
}