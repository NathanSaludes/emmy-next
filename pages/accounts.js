import React from 'react'
import Head from 'next/head'
import styles from '@/styles/custom.accounts/Accounts.module.scss'

import MainLayout from '@/components/layouts/MainLayout'
import PageHeader from '@/components/PageHeader'
import AccountListTabs from '@/components/AccountListTabs/UserListTabs'
import List from '@/components/List'
import Badge from '@/components/Badge'
import ListActions from '@/components/ListActions'
import ListControls from '@/components/ListControls'
import Modal from '@/components/Modal'
import AddUserForm from '@/components/AddUserForm'
import Search from '@/components/ListSearch'

import { HiPlus, HiSearch } from 'react-icons/hi'
import { useList } from '@/utils/useList'

// DEBUG --------------------------------------------------------------------
import users from '../sample_data/users.json';
const isAdmin = true;
const userData = users?.map(item => ({
	...item,
	dateCreated: new Date(item.dateCreated)
}));
// --------------------------------------------------------------------------

const AddUserButton = () => (
	<button className={`text-white bg-emmy-blue text-md text-opacity-90 py-1 md:py-1.5 pr-6 pl-4 rounded-lg flex items-center focus:outline-none focus:ring-2 ring-offset-emmy-blue font-semibold`}>
		<HiPlus className="text-white text-opacity-50 mr-1" />
		Add New
	</button>
)

export default function UserAccounts() {

	const { data, toggleSort, sortedColumn, sortDirection } = useList(userData, 'dateCreated');

	const headers = React.useMemo(() => ([
		{ text: 'Name', name: 'name', hidden: false, sortable: true },
		{ text: 'Username', name: 'username', hidden: false, sortable: true },
		{ text: 'Email', name: 'email', hidden: false, sortable: true },
		{ text: 'Status', name: 'status', hidden: false, sortable: false },
		{ text: 'Actions', name: 'actions', hidden: !isAdmin, sortable: false },
	]), [isAdmin])


	const getRowSchema = (data) => {
		return data?.map(user => ({
			id: user.id,
			name: user.name,
			username: user.username,
			email: user.email,
			status: (<Badge label={user.isActive ? 'active' : 'disabled'} color={user.isActive ? 'bg-green-500' : 'bg-red-500'} />),
			actions: (<ListActions />)
		}))
	}

	return (
		<>
			<Head>
				<title>User Accounts</title>
			</Head>
			<MainLayout>
				<PageHeader title="User Accounts">
					<AddUserButton />
				</PageHeader>
				<Search />
				<AccountListTabs />
				<div className={`${styles.listViewSection} flex flex-col overflow-x-hidden mt-8 mb-6`}>
					<List
						data={getRowSchema(data)}
						headers={headers}
						primaryColumn="name"
						toggleSort={toggleSort}
						sortedColumn={sortedColumn}
						sortDirection={sortDirection}
					/>
				</div>
				<ListControls />
				<Modal>
					<AddUserForm />
				</Modal>
			</MainLayout>
		</>
	)
}