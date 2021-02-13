import { useList } from '@/utils/useList';
import React from 'react'
import HeaderCell from './HeaderCell';

function ListHeader({ headers, primaryColumn, sortedColumn, sortDirection, toggleSort }) {
	return (
		<div className={`table-row`}>
			{
				headers.map(header => (
					!header.hidden &&
					<HeaderCell
						key={header.name}
						name={header.name}
						label={header.text}
						isSortable={header.sortable}
						isPrimary={primaryColumn === header.name}
						enableSort={sortedColumn === header.name}
						sortDirection={sortDirection}
						toggleSort={toggleSort}
					/>
				))
			}
		</div>
	)
}

export default ListHeader;
