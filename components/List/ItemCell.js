import React from 'react'

function ItemCell({ isPrimary, children }) {
	return (
		<div className={`${isPrimary ? 'table-cell text-emmy-blue-accent' : 'hidden md:table-cell'} 
		px-4 py-5 border-b-2 min-w-max border-opacity-20 border-main text-base font-normal flex items-center overflow-hidden overflow-ellipsis whitespace-nowrap`} style={{ maxWidth: '15rem' }}>
			{children}
		</div>
	)
}

export default ItemCell
