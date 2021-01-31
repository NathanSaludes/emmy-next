import Head from 'next/head'
import MainLayout from '@/components/layouts/MainLayout'
import PageHeader from '@/components/PageHeader'
import { HiPlus, HiSearch } from 'react-icons/hi'
import UserList from '@/components/UserList'

const AddUserButton = () => (
	<button className={`text-white bg-emmy-blue text-md text-opacity-90 py-1 md:py-1.5 pr-6 pl-4 rounded-lg flex items-center focus:outline-none focus:ring-2 ring-offset-emmy-blue font-semibold`}>
		<HiPlus className="text-white text-opacity-50 mr-1" />
		Add User
	</button>
)

const SearchUser = () => (
	<div className="mb-5 my-8">
		<div className="bg-dark-denim-accent rounded-md flex items-center relative">
			<HiSearch className="absolute left-3 text-blue-100 text-opacity-30 text-lg" />
			<input
				type="text" name="search_user"
				placeholder="Search"
				className={`bg-transparent border-none pr-4 pl-10 py-1 rounded-lg text-white placeholder-blue-100 placeholder-opacity-30 w-full outline-none focus:ring-1`} />
		</div>
	</div>
)

export default function UserAccounts() {
	return (
		<>
			<Head>
				<title>User Accounts</title>
			</Head>
			<MainLayout>
				<PageHeader title="User Accounts">
					<AddUserButton />
				</PageHeader>
				<SearchUser />
				<UserList />
			</MainLayout>
		</>
	)
}