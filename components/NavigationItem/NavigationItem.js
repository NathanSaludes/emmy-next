import Link from 'next/link'
import styles from './NavigationItem.module.scss'
import { motion } from 'framer-motion'

/*
props:
- icon
- href
- active (tentative)
*/

export default function NavigationItem({ link, icon, label, active }) {
	return (
		<Link href={link}>
			<motion.div
				whileHover={{ x: 6, filter: 'brightness(1.2)' }}
				className={`${styles.NavigationItem} ${active && styles.isActive}`}
			>
				<a className={styles.NavigationItemLink}>
					{icon &&
						<div className={styles.Icon}>
							{icon}
						</div>
					}
					{icon && label &&
						<span className={styles.Label}>
							{label}
						</span>
					}
				</a>
			</motion.div>
		</Link>
	)
}