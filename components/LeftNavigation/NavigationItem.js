import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NavigationItem({ link, label, icon }) {
	return (
		<motion.li
			whileHover={{ x: 6 }}
			className="flex flex-shrink-0 bg-opacity-50 hover:bg-blue-400 cursor-pointer rounded-l-lg"
		>
			<Link href={link}>
				<a className="flex pl-4 p-3">
					<div className="h-8 w-8 flex-shrink-0">
						<img className="object-contain" src={`/icons/${icon}`} />
					</div>
					<span className="text-white text-opacity-90 ml-6 flex items-center w-full flex-grow-1 text-base pr-2 lg:pr-5 tracking-wide min-w-max">
						{label}
					</span>
				</a>
			</Link>
		</motion.li>
	)
}