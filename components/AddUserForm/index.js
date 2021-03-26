import React from 'react'
import { RiCloseLine } from 'react-icons/ri'

function AddUserForm() {
	return (
		<div className={`bg-dark-denim-accent px-8 pt-5 pb-8 rounded-2xl`}>
			<div className="flex flex-col items-center border-2 border-dashed border-red-500 border-opacity-0 w-80 sm:w-96">
				<div className="flex justify-between items-baseline w-full">
					<div className="font-semibold text-2xl tracking text-main">
						Create New User
					</div>
					<button className="flex justify-center items-center h-9 w-9 bg-emmy-blue-accent bg-opacity-30 rounded-md group hover:bg-opacity-40 focus:outline-none focus:ring-2">
						<RiCloseLine className="text-2xl text-main group-hover:text-primary" />
					</button>
				</div>
				<div className="flex text-sm p-3 mt-5 rounded-lg border-2 border-dashed border-emmy-blue-accent border-opacity-30 w-full">
					Field
				</div>
				<div className="flex text-sm p-3 mt-5 rounded-lg border-2 border-dashed border-emmy-blue-accent border-opacity-30 w-full">
					Field
				</div>
				<div className="flex text-sm p-3 mt-5 rounded-lg border-2 border-dashed border-emmy-blue-accent border-opacity-30 w-full">
					Field
				</div>
				<div className="flex text-sm p-3 mt-5 rounded-lg border-2 border-dashed border-emmy-blue-accent border-opacity-30 w-full">
					Field
				</div>
			</div>
		</div>
	)
}

export default AddUserForm
