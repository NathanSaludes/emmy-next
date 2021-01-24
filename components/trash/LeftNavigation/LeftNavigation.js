import Image from 'next/image'
import { motion } from 'framer-motion'

import styles from './LeftNavigation.module.scss'

import NavigationItem from '../NavigationItem'
import {
	AccountsIcon,
	DashboardIcon,
	EmployeesIcon,
	IacademyIcon,
	SentimentIcon,
	SettingsIcon,
	SystemLogsIcon
} from '@/styles/Icons'


const BrandLogo = () => (
	<div style={{
		width: '100%',
		minWidth: 'max-content',
		margin: '0.7rem 0 1.5rem 0',
		display: 'flex',
		flexDirection: 'column'
	}}>
		<Image src="/images/iACADEMY_Seal.svg" height={40} width={40} />
	</div>
)

export default function LeftNavigation(props) {
	return (
		<motion.div
			className={styles.Wrapper}
			initial={false}
			whileHover={{
				width: '15rem',
				transition: {
					type: "spring",
					restDelta: 2,
					duration: 0.5
				}
			}}
		>
			<BrandLogo />
			<NavigationItem active link="/dashboard" label="Dashboard" icon={<DashboardIcon />} />
			<NavigationItem link="/sentiments" label="Sentiments" icon={<SentimentIcon />} />
			<NavigationItem link="/employees" label="Employees" icon={<EmployeesIcon />} />
			<NavigationItem link="/accounts" label="User Accounts" icon={<AccountsIcon />} />
			<NavigationItem link="/logs" label="System Logs" icon={<SystemLogsIcon />} />
			<NavigationItem link="/settings" label="Global Settings" icon={<SettingsIcon />} />
		</motion.div>
	)
}