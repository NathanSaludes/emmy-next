import { HiMenu, HiOutlineX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import NavigationItem from './NavigationItem';
import { useMenuContext } from '@/utils/useMenu';

export default function LeftNavigation(props) {

	const { isOpen, toggleMenu, isMobile } = useMenuContext();

	const variants = {
		"mobile": {
			width: (isOpen ? '14rem' : '0rem'),
			transition: {
				type: 'tween',
				duration: 0.3,
				restDelta: 2
			}
		},
		"desktop": {
			width: '4rem'
		}
	}

	return (
		<motion.div
			variants={variants}
			initial={isMobile && { width: '0rem' }}
			animate={isMobile ? "mobile" : "desktop"}
			whileHover={!isMobile && { width: '16rem' }}
			className={`fixed flex flex-col h-full py-4 bg-emmy-blue text-white z-20 overflow-hidden divide-y divide-blue-400`}
		>
			<div className="flex items-start justify-between lg:justify-center px-4 mb-3 opacity-80 flex-shrink-0 min-w-max">
				<img className="h-8 flex-shrink-0 mr-4" src="/images/iACADEMY_Seal.svg" alt="iACADEMY" />
				<button
					className="lg:hidden rounded-md bg-emmy-blue-accent bg-opacity-80 hover:bg-opacity-100 p-2 max-w-max focus:outline-none focus:ring-2 focus:ring-opacity-30"
					onClick={toggleMenu}
				>
					<HiOutlineX className="text-white text-lg" />
				</button>
			</div>

			<ul className="flex-shrink-0 overflow-hidden lg:block pt-3">
				<NavigationItem link="/dashboard" label="Dashboard" icon="dashboard2.svg" />
				<NavigationItem link="/sentiments" label="Sentiments" icon="sentiment2.svg" />
				<NavigationItem link="/employees" label="Employees" icon="employees2.svg" />
				<NavigationItem link="/accounts" label="User Accounts" icon="accounts2.svg" />
				<NavigationItem link="/logs" label="System Logs" icon="logs2.svg" />
				<NavigationItem link="/settings" label="Global Settings" icon="settings2.svg" />
			</ul>
		</motion.div>
	)
}