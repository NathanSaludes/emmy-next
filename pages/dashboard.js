import Head from 'next/head'
import MainLayout from '@/components/layouts/MainLayout'
import PageHeader from '@/components/PageHeader'

export default function Dashboard() {
	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			<MainLayout>
				<PageHeader title="Dashboard" />
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quasi harum voluptatum delectus totam possimus enim laborum laudantium saepe consequuntur quod animi, sint nisi. Eaque at dolorem illum, suscipit explicabo consequatur quod autem. Laborum voluptatem explicabo iusto porro tenetur sapiente assumenda officia quam debitis id quaerat asperiores eius maiores, ut quia totam recusandae ipsam est, atque non officiis reiciendis! Eveniet reiciendis quia iure eius ipsam. Veniam modi reprehenderit animi molestiae dicta inventore, adipisci libero recusandae saepe nobis temporibus, assumenda ratione eaque. Iusto quae fugiat doloribus, quos harum dicta sequi maxime ex voluptates. Molestiae tenetur totam facilis sed minus veniam dolorem.
				</p>
			</MainLayout>
		</>
	)
}