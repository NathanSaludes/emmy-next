import React from 'react'
import Head from 'next/head'

import MainLayout from '@/components/layouts/MainLayout'
import PageHeader from '@/components/PageHeader'
import List from '@/components/List'
import ListControls from '@/components/ListControls'

import { useList } from '@/utils/useList'

// DEBUG --------------------------------------------------------------------
import logs from '../sample_data/logs.json';
const isAdmin = true;
const sysLogs = logs?.map(item => item);
// --------------------------------------------------------------------------

export default function SystemLogs() {

	const { data, toggleSort, sortedColumn, sortDirection } = useList(logs, '_id');

	const headers = React.useMemo(() => ([
		{ text: 'Date', name: 'date', hidden: false, sortable: true },
		{ text: 'Time', name: 'time', hidden: false, sortable: false },
		{ text: 'Description', name: 'description', hidden: false, sortable: true },
		{ text: 'Action', name: 'action', hidden: false, sortable: false },
		{ text: 'Agent', name: 'agent', hidden: false, sortable: true },
	]), [isAdmin])

	const getData = (data) => {
		return data?.map(log => ({
			id: log._id,
			date: new Date(log.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
			time: new Date(log.date).toLocaleTimeString(),
			description: log.description,
			action: log.action,
			agent: log.user
		}))
	}

	return (
		<>
			<Head>
				<title>System Logs</title>
			</Head>
			<MainLayout>
				<PageHeader title="System Logs" />
				<div className={`flex flex-col overflow-x-hidden bg-pink-500 bg-opacity-0 mb-8`}>
					<List
						data={getData(data)}
						headers={headers}
						primaryColumn="description"
						toggleSort={toggleSort}
						sortedColumn={sortedColumn}
						sortDirection={sortDirection}
					/>
				</div>
				<ListControls />
			</MainLayout>
		</>
	)
}