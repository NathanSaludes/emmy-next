import { useState, useCallback, useEffect } from 'react'

const SORT_OPTIONS = ['NONE', 'ASC', 'DESC']
const DEFAULT_SORT_DIR = SORT_OPTIONS[0];

export function useList(_data, indexFieldName) {
	const [data, setData] = useState(_data || []);
	const [sortedColumn, setSortedColumn] = useState(indexFieldName || '');
	const [sortDirection, setSortDirection] = useState(DEFAULT_SORT_DIR);

	/* ------------------------------------------------------------------------- 
	SIDE EFFECT: Sort data if sort changes
	------------------------------------------------------------------------- */
	useEffect(() => {
		if (sortDirection === DEFAULT_SORT_DIR) {
			setData(current => current.slice().sort((a, b) => a[indexFieldName] - b[indexFieldName]));
		}
		else {
			setData(current => {
				let sorted = current.slice().sort((a, b) => {
					if (a[sortedColumn] > b[sortedColumn]) return 1;
					if (a[sortedColumn] < b[sortedColumn]) return -1;
					return 0;
				});

				if (sortDirection === SORT_OPTIONS[2]) {
					return sorted.reverse();
				}

				return sorted;
			});
		}
	}, [sortedColumn, sortDirection]);


	/* ------------------------------------------------------------------------- 
	UTILITY: Toggle sort direction
	DESCRIPTION:
	if the user toggles sort from the same sorted column, change to the next sort
	option type. else, if the user toggles sort on a different column	than current
	sorted column, set the sort option type to ascending by default.
	------------------------------------------------------------------------- */
	const toggleSort = useCallback((sortBy) => {
		setSortedColumn(sortBy);
		if (sortBy === sortedColumn) {
			let currentSortOptionIndex = SORT_OPTIONS.indexOf(sortDirection);
			if (currentSortOptionIndex < SORT_OPTIONS.length - 1) {
				setSortDirection(SORT_OPTIONS[++currentSortOptionIndex]);
			}
			else {
				setSortDirection(DEFAULT_SORT_DIR);
			}
		}
		else {
			// set sort direction to ascending
			setSortDirection(SORT_OPTIONS[1]);
		}
	});


	return {
		data,
		sortedColumn,
		sortDirection,
		toggleSort
	}
}