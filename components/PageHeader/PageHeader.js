import PageHeader from "."
import styles from './PageHeader.module.scss';

export default function Header({ title }) {
	return (
		<div>
			<h1 className={`font-bold text-3xl mb-4 ${styles.HeaderTitle}`}>
				{title}
			</h1>
		</div>
	)
}