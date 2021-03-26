import MainLayout from '@/components/layouts/MainLayout';
import PageHeader from '@/components/PageHeader'
import Head from 'next/head'

import Modal from '@/components/Modal'
import AddUserForm from '@/components/AddUserForm'

export default function Test() {

	return (
		<MainLayout>
			<Head>
				<title>Test</title>
			</Head>
			<Modal>
				<AddUserForm />
			</Modal>
		</MainLayout>
	)
}