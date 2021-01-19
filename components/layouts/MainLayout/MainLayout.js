import styles from './MainLayout.module.scss'
import LeftNavigation from '@/components/LeftNavigation'
import AppBar from '@/components/AppBar'

export default function Mainlayout({ children }) {
	return (
		<div className={styles.LayoutWrapper}>
			<LeftNavigation />
			<AppBar />
			<div className={styles.contentWrapper}>
				{children}
			</div>
		</div>
	)
}