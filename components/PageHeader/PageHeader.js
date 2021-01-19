import PageHeader from "."
import styles from './PageHeader.module.scss';

export default function Header(props) {
	return (
		<div>
			<h1 className={styles.HeaderTitle}>{props.title}</h1>
		</div>
	)
}