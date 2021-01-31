export default function TableCellItem({ content, primary }) {
	return (
		<div className={`${!primary ? 'hidden md:table-cell' : 'table-cell text-emmy-blue-accent'} py-5 border-b-2 border-opacity-20 border-main text-base font-normal flex items-center`}>
			{content}
		</div>
	)
}