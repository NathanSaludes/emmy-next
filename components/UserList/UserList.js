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

/* Sample app data */
const isAdmin = true;
const users = [
	{
		id: '8424cb43-2b96-4904-82f9-78107bd01cf8',
		name: 'Nathaniel Saludes',
		username: 'NathanSaludes',
		email: 'nsaludes@iacademy.edu.ph',
		isActive: true,
	},
	{
		id: '0afdee69-2b9f-4b9c-a192-ac3ab649c4d9',
		name: 'Paolo Latoja',
		username: 'PaoloLatoja',
		email: 'platoja@iacademy.edu.ph',
		isActive: true,
	},
	{
		id: '70ffdec8-520f-428e-aae6-919b841c4423',
		name: 'Michael Ong',
		username: 'MichaelOng',
		email: 'mong@iacademy.edu.ph',
		isActive: true,
	},
	{
		id: '36532ecc-c201-4428-a3dc-43e354100a96',
		name: 'Brian Dineros',
		username: 'BrianDineros',
		email: 'bdineros@iacademy.edu.ph',
		isActive: false,
	},
	{
		id: '8eeb0de7-961e-4236-8ed3-09a5f7297189',
		name: 'Hannah Chua',
		username: 'HannahChua',
		email: 'hchua@iacademy.edu.ph',
		isActive: false,
	},
]

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
					{isAdmin && <TableCellHeader label="Actions" />}
				</div>
				{users.map(user => {
					return (
						<div className="table-row" key={user.id}>
							<TableCellItem content={user.name} primary />
							<TableCellItem content={user.username} />
							<TableCellItem content={user.email} />
							<TableCellItem content={<StatusBadge isActive={user.isActive} />} />
							{isAdmin && <TableCellItem content={<AccountActions />} />}
						</div>
					)
				})}

			</div>
		</div>
	)
}