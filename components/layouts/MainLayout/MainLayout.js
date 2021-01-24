import styles from './MainLayout.module.scss'
import AppBar from '@/components/AppBar'
import LeftNavigation from '@/components/LeftNavigation'
import { MenuProvider } from '@/utils/useMenu'

export default function Mainlayout({ children }) {
	return (
		<MenuProvider>
			<div className={`flex flex-col ${styles.LayoutWrapper} min-h-full`}>
				<LeftNavigation />
				<AppBar />
				<div className={`${styles.contentWrapper} shadow-sm leading-9 min-h-screen w-10/12 mt-24 mx-auto`}>
					{children}
				</div>
			</div>
		</MenuProvider>
	)
}