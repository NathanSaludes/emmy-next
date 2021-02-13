import { ImCross } from 'react-icons/im'
import { MdEdit } from 'react-icons/md';

const RemoveButton = () => (
	<button className="bg-red-500 p-2 rounded-full focus:outline-none focus:ring-2 mr-2">
		<ImCross className="text-xs text-red-100 text-opacity-70" />
	</button>
)

const EditButton = () => (
	<button className="bg-dark-denim-faded p-2 rounded-full focus:outline-none focus:ring-2">
		<MdEdit className="text-xs text-blue-100 text-opacity-70 transform scale-125" />
	</button>
)

export default function AccountActions({ id }) {
	return (
		<div className="flex">
			<RemoveButton />
			<EditButton />
		</div>
	)
}