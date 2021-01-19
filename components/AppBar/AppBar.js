import styles from './AppBar.module.scss';
import Image from 'next/image'

const UserAvatar = () => {
	return (
		<div style={{
			// backgroundColor: 'red',
			flexGrow: 1,
			display: 'flex',
			justifyContent: 'flex-end'
		}}>
			<button style={{
				overflow: 'hidden',
				borderRadius: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				cursor: 'pointer',
				border: 'none',
				outline: 'none',
			}}>
				<Image src="/images/placeholder-avatar.png" alt="Firstname Lastname" width={31} height={31} />
			</button>
		</div >
	)
}

export default function AppBar() {
	return (
		<div className={styles.AppBarWrapper}>
			<div className={styles.alignCenter}>
				<h2 className={styles.PageContext}>Dashboard</h2>
				<UserAvatar />
			</div>
		</div>
	)
}