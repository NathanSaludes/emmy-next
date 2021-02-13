import React from 'react'
import ListBody from './ListBody';
import ListHeader from './ListHeader'
import styles from './List.module.scss';
import { useList } from '@/utils/useList';

/* ------------------------------------------------------------
PROPS:
data - item/row schema
headers - list header config
primaryColumn - key identifier column for responsive view mode
------------------------------------------------------------ */
function List({ data, headers, primaryColumn, toggleSort, sortedColumn, sortDirection }) {
	return (
		<div className={`table w-full mt-8 mb-6 ${styles.List}`}>
			<ListHeader headers={headers} primaryColumn={primaryColumn} toggleSort={toggleSort} sortedColumn={sortedColumn} sortDirection={sortDirection} />
			<ListBody data={data} primaryColumn={primaryColumn} headers={headers} />
		</div>
	)
}

export default List;
