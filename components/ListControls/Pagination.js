import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

export default function Pagination() {
	return (
		<div className="Pagination flex items-center bg-opacity-80 h-full rounded-md bg-dark-denim-accent">
			<button className="flex items-center justify-center rounded-md h-9 w-9 focus:outline-none hover:bg-blue-400 hover:bg-opacity-10 hover:text-white group">
				<BsCaretLeftFill className="text-xs text-white opacity-40 group-hover:opacity-100" />
			</button>
			<div className="flex justify-center bg-opacity-10 px-2">
				{[5, 4, 3, 2, 1].map((item, index) => (
					<button key={item} className={`flex items-center justify-center h-full rounded-md w-9 ${item == 5 ? 'text-white bg-blue-400 bg-opacity-20' : ''} focus:outline-none hover:bg-blue-400 hover:bg-opacity-10 hover:text-white`}>
						{item}
					</button>
				))}
			</div>
			<button className="flex items-center justify-center rounded-md h-9 w-9 ml-2 focus:outline-none hover:bg-blue-400 hover:bg-opacity-10 hover:text-white group">
				<BsCaretRightFill className="text-xs text-white opacity-40 group-hover:opacity-100" />
			</button>
		</div>
	)
}