import styles from './BlueLayout.module.scss';

export default function BlueLayout({ children }) {
	return (
		<div className={`${styles.BackgroundImage} text-white flex flex-col min-h-screen w-full items-center justify-center`}>
			{children}
		</div>
	)
}