const TWCSS_BORDER_STYLE = 'border-b-4';

const UserListTabItem = ({ label, active }) => (
	<div className={`px-4 py-2 rounded-t-lg ${TWCSS_BORDER_STYLE} ${active ? 'border-emmy-blue' : `border-main border-opacity-20`} cursor-pointer hover:bg-dark-denim-accent`}>
		{label}
	</div>
)

export default function UserListTabs() {
	return (
		<div className="TABS flex">
			<UserListTabItem label="All" active />
			<UserListTabItem label="Users" />
			<UserListTabItem label="Administrators" />
			<div className={`px-4 py-2 ${TWCSS_BORDER_STYLE} border-main border-opacity-20 flex-grow`}></div>
		</div>
	)
}