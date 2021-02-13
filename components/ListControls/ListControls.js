import React from 'react';
import Pagination from './Pagination';
import { HiMenu } from 'react-icons/hi';

const ListControls = React.memo(() => {
	return (
		<div className="ListControls flex items-center justify-center bg-opacity-50 mb-20 h-10">
			<button className="flex-grow-0 w-max mr-2 px-3 h-full bg-opacity-80 bg-dark-denim-accent rounded-md hover:bg-blue-400 hover:bg-opacity-20 focus:outline-none">
				<HiMenu className="text-2xl" />
			</button>
			<Pagination />
		</div>
	)
})

export default ListControls;