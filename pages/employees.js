import React from 'react'
import Head from 'next/head'

import MainLayout from '@/components/layouts/MainLayout'
import PageHeader from '@/components/PageHeader'
import Search from '@/components/ListSearch'
import ListControls from '@/components/ListControls'
import List from '@/components/List'
import ListActions from '@/components/ListActions'

import { HiPlus, HiOutlineDocumentDownload } from 'react-icons/hi'
import { useList } from '@/utils/useList'

// DEBUG --------------------------------------------------------------------
import employees from '../sample_data/employees.json'
import Modal from '@/components/Modal'
const isAdmin = true;
// --------------------------------------------------------------------------

export default function Employees() {

	const { data, toggleSort, sortedColumn, sortDirection } = useList(employees, 'fingerprintId');

	const headers = React.useMemo(() => ([
		{ text: 'Name', name: 'name', hidden: false, sortable: true },
		{ text: 'Email', name: 'email', hidden: false, sortable: true },
		{ text: 'Department', name: 'department', hidden: false, sortable: true },
		{ text: 'Job Title', name: 'jobTitle', hidden: false, sortable: true },
		{ text: 'Employment Type', name: 'employmentStatus', hidden: false, sortable: true },
		{ text: 'Actions', name: 'actions', hidden: !isAdmin, sortable: false },
	]), [isAdmin])

	const getData = (data) => {
		return data?.map(employee => ({
			...employee,
			name: `${employee.lastname}, ${employee.firstname}`,
			actions: (<ListActions />)
		}))
	}

	return (
		<>
			<Head>
				<title>Employees</title>
			</Head>
			<MainLayout>
				<PageHeader title="Employees">
					<button className="text-white bg-dark-denim-faded text-md text-opacity-90 py-1 md:py-1.5 pr-5 pl-3 mr-4 rounded-lg flex items-center focus:outline-none focus:ring-2 ring-offset-emmy-blue font-semibold">
						<HiOutlineDocumentDownload className="text-white text-opacity-50 mr-1 text-xl" />
						Import
					</button>
					<button className={`text-white bg-emmy-blue text-md text-opacity-90 py-1 md:py-1.5 pr-6 pl-4 rounded-lg flex items-center focus:outline-none focus:ring-2 ring-offset-emmy-blue font-semibold`}>
						<HiPlus className="text-white text-opacity-50 mr-1" />
						Add New
					</button>
				</PageHeader>
				<Search />
				<div className={`flex flex-col overflow-x-hidden mt-8 mb-6 bg-red-500 bg-opacity-0`}>
					<List
						data={getData(data)}
						headers={headers}
						primaryColumn="name"
						toggleSort={toggleSort}
						sortDirection={sortDirection}
						sortedColumn={sortedColumn}
					/>
				</div>
				<ListControls />
				<Modal>
					Hello World
				</Modal>
			</MainLayout>
		</>
	)
}