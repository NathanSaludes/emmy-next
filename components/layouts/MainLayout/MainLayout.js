import AppBar from '@/components/AppBar'
import LeftNavigation from '@/components/LeftNavigation'
import { MenuProvider } from '@/utils/useMenu'

export default function Mainlayout({ children }) {
	return (
		<>
			<MenuProvider>
				<div className={`main_layout flex flex-col bg-dark-denim text-main min-h-screen`}>
					<LeftNavigation />
					<AppBar />
					<div className={`shadow-sm leading-9 min-h-full w-10/12 lg:w-8/12 mt-24 mx-auto`}>
						{children}
					</div>
				</div>
			</MenuProvider>
		</>
	)
}