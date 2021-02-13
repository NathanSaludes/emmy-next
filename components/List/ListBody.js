import React from 'react'
import ItemCell from './ItemCell';

function ListBody({ data, primaryColumn, headers }) {

	const columns = headers?.map(header => header.name);

	return (
		<>
			{data?.map((item, index) => (
				<div className="table-row hover:bg-dark-denim-accent hover:bg-opacity-70" key={item.id}>
					{columns?.map((column, index) => (
						<ItemCell isPrimary={primaryColumn === column} key={index}>
							{item[column] ? item[column] : '--'}
						</ItemCell>
					))}
				</div>
			))}
		</>
	)
}

export default ListBody
