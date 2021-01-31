import UserListTabs from './UserListTabs';
import TableCellItem from './TableCellItem';
import TableCellHeader from './TableCellHeader';
import AccountActions from './AccountActions';

const StatusBadge = ({ isActive }) => {
	const COLOR = (isActive ? 'bg-green-500 text-green-200' : 'bg-red-500 text-red-200');
	return (
		<span className={`uppercase  py-1 px-2 ${COLOR} text-sm rounded font-semibold`}>
			{isActive ? 'Active' : 'Disabled'}
		</span>
	)
}

export default function UserList() {
	return (
		<div className="flex flex-col bg-opacity-30">
			<UserListTabs />
			<div className="table w-full bg-opacity-25 mt-10">
				<div className="table-row">
					<TableCellHeader label="Name" />
					<TableCellHeader label="Username" />
					<TableCellHeader label="Email" />
					<TableCellHeader label="Status" />
					<TableCellHeader label="Actions" />
				</div>
				<div className="table-row">
					<TableCellItem content={`Nathaniel Saludes`} primary />
					<TableCellItem content={`NathanSaludes`} />
					<TableCellItem content={`nsaludes@iacademy.edu.ph`} />
					<TableCellItem content={<StatusBadge isActive />} />
					<TableCellItem content={<AccountActions />} />
				</div>
			</div>
		</div>
	)
}