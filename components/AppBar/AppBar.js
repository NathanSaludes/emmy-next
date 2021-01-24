import styles from './AppBar.module.scss';
import { HiMenu, HiBell } from 'react-icons/hi';
import { useMenuContext } from '@/utils/useMenu';
import { useRouter } from 'next/router'

const UserAvatar = () => {
	return (
		<button className="rounded-full flex items-center justify-center cursor-pointer border-none overflow-hidden h-9 w-9 focus:outline-none focus:ring-blue-400 focus:ring-opacity-90 focus:ring-2">
			<img className="object-scale-down" src="/images/placeholder-avatar.png" alt="Firstname Lastname" />
		</button>
	)
}

const Notification = ({ hasUnread }) => (
	<button className="flex mr-4 focus:outline-none group">
		<HiBell className={`text-3xl ${hasUnread && 'text-blue-400'} group-hover:text-opacity-80`} />
		{
			hasUnread && (
				<>
					<div className="bg-red-500 h-3 w-3 rounded-full -ml-3" />
					<div className="bg-red-500 h-3 w-3 rounded-full -ml-3 animate-ping" />
				</>
			)
		}

	</button>
)

export default function AppBar() {

	const { toggleMenu } = useMenuContext();
	const router = useRouter();
	const title = router.route.replace('/', '')

	return (
		<div className={`fixed z-10 flex items-center justify-center w-full py-3 bg-appbar ${styles.AppBarWrapper}`}>
			<div className={`flex items-center w-10/12`}>
				<div className={`flex items-center justify-center`}>
					<button
						className="lg:hidden p-2 rounded-md mr-2 hover:bg-blue-400 hover:bg-opacity-20 focus:outline-none focus:ring-2"
						onClick={toggleMenu}
					>
						<HiMenu className="text-2xl" />
					</button>
					<h2 className="text-lg -mb-1 font-semibold md:font-medium capitalize">
						{title}
					</h2>
				</div>
				<div className="flex flex-grow justify-end items-center">
					<Notification hasUnread={true} />
					<UserAvatar />
				</div>
			</div>
		</div>
	)
}