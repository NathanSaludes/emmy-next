import React from 'react'
import { BsCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';


function HeaderCell({ label, name, isPrimary, isSortable, enableSort, sortDirection, toggleSort }) {

	const getSortGlyph = React.useCallback((direction) => {
		switch (direction) {
			case 'ASC':
				return <BsFillCaretUpFill className={`text-green-500 animate-bounce`} />;
			case 'DESC':
				return <BsCaretDownFill className={`text-red-500 animate-bounce`} />;
			default:
				return '';
		}
	});

	return (
		<div className={`${isPrimary ? 'table-cell' : 'hidden md:table-cell'} pl-4 py-4 border-b-2 border-opacity-20 border-main text-sm`}>
			<button className={`flex w-max p-1 items-center focus:outline-none ${isSortable ? 'cursor-pointer' : 'cursor-default'}`} onClick={() => isSortable && toggleSort(name)}>
				<span className="mr-1 uppercase text-primary font-semibold text-xs">{label}</span>
				{enableSort && getSortGlyph(sortDirection)}
			</button>
		</div>
	)
}

export default HeaderCell
