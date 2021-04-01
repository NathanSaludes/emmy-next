import React from 'react'
import { HiSearch } from 'react-icons/hi'

const Search = () => (
	<div className="mb-3 mt-5">
		<div className="bg-dark-denim-accent rounded-md flex items-center relative">
			<HiSearch className="absolute left-3 text-blue-100 text-opacity-30 text-lg" />
			<input
				type="text" name="search"
				placeholder="Search"
				className={`bg-transparent border-none pr-4 pl-10 py-1 rounded-lg text-white placeholder-blue-100 placeholder-opacity-30 w-full outline-none focus:ring-1`} />
		</div>
	</div>
)

export default Search;