import styles from './UserListTabs.module.scss';
const TWCSS_BORDER_STYLE = 'border-b-4';

const UserListTabItem = ({ label, active }) => (
	<div className={`px-4 py-2 rounded-t-lg ${TWCSS_BORDER_STYLE} ${active ? 'border-emmy-blue text-emmy-blue-accent' : `border-main border-opacity-20 hover:text-white`} cursor-pointer hover:bg-dark-denim-accent`}>
		{label}
	</div>
)

export default function UserListTabs() {
	return (
		<div className="relative">
			<div
				className={`TABS flex overflow-x-auto ${styles.UserListTabs}`}
			>
				<UserListTabItem label="All" active />
				<UserListTabItem label="Users" />
				<UserListTabItem label="Administrators" />
				<UserListTabItem label="Active" />
				<UserListTabItem label="Disabled" />
				<div className={`px-4 py-2 ${TWCSS_BORDER_STYLE} border-main border-opacity-20 flex-grow `}></div>
			</div>
		</div>
	)
}