import { ImCross } from 'react-icons/im'
import { MdEdit } from 'react-icons/md';

const RemoveButton = () => (
	<button className="bg-red-500 p-2 rounded-full focus:outline-none focus:ring-2 mr-2 cursor-pointer">
		<ImCross className="text-xs text-red-100 text-opacity-70 cursor-pointer" />
	</button>
)

const EditButton = () => (
	<button className="bg-dark-denim-faded p-2 rounded-full focus:outline-none focus:ring-2 cursor-pointer">
		<MdEdit className="text-xs text-blue-100 text-opacity-70 transform scale-125 cursor-pointer" />
	</button>
)

export default function ListActions({ id }) {
	return (
		<div className="flex">
			<RemoveButton />
			<EditButton />
		</div>
	)
}