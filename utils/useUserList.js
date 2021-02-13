import { useState, useEffect, useCallback } from 'react';
import AccountActions from '@/components/UserList/AccountActions';
import StatusBadge from '@/components/UserList/StatusBadge';

const ORDER_OPTIONS = ['NONE', 'ASC', 'DESC'];
const INITIAL_ORDER_DIRECTION = ORDER_OPTIONS[0];

export function useUserList(_data, header, _primaryColumn) {
	const [data, setData] = useState(_data || []);
	const [headers, setHeaders] = useState(header || []);
	const [primaryColumn, setPrimaryColumn] = useState(_primaryColumn || '');
	const [order_column, setOrderColumn] = useState(_primaryColumn || '');
	const [order_direction, setOrderDirection] = useState(INITIAL_ORDER_DIRECTION);

	// Sort data as order_column and order_direction changes
	useEffect(() => {
		if (order_direction === ORDER_OPTIONS[0]) {
			setData(current => current.slice().sort((a, b) => new Date(a.dateCreated) - new Date(b.dateCreated)));
		}
		else {
			setData(current => {
				let sortedArr = current.slice().sort((a, b) => {
					if (a[order_column] < b[order_column]) {
						return -1;
					}
					if (b[order_column] > a[order_column]) {
						return 1;
					}

					return 0;
				});

				if (order_direction === ORDER_OPTIONS['2']) {
					return sortedArr.reverse();
				}

				return sortedArr;
			});
		}
	}, [order_column, order_direction])

	const toggleOrder = useCallback((sortByColumn) => {
		/* ----------------------------------------------------------------------
		If toggling the order of the same column, shift to next order type
		---------------------------------------------------------------------- */
		setOrderColumn(current => sortByColumn);
		if (sortByColumn === order_column) {
			let currentOrderTypeIndex = ORDER_OPTIONS.indexOf(order_direction);
			/* ----------------------------------------------------------------------
			/ check if the index of order type is refers to the last option (DESC), 
			/ point cursor to the start again... else, shift to the next order type
			---------------------------------------------------------------------- */
			if (currentOrderTypeIndex < ORDER_OPTIONS.length - 1) {
				setOrderDirection(current => {
					return ORDER_OPTIONS[++currentOrderTypeIndex];
				})
			} else {
				setOrderDirection(INITIAL_ORDER_DIRECTION);
			}

		} else {
			// set the order direction to the default
			setOrderDirection(ORDER_OPTIONS[1]);
		}

	}, [data, order_column, order_direction]);


	const getColumnNames = useCallback(() => {
		return headers?.map(header => header.name);
	}, [header]);


	return {
		headers,
		primaryColumn,
		order_column,
		order_direction,
		data,
		toggleOrder,
		getColumnNames
	}
}