import Head from 'next/head'
import MainLayout from '@/components/layouts/MainLayout'
import PageHeader from '@/components/PageHeader'

export default function GlobalSettings() {
	return (
		<>
			<Head>
				<title>Global Settings</title>
			</Head>
			<MainLayout>
				<PageHeader title="Global Settings" />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse mollitia eum modi incidunt ipsa culpa quidem dolorem commodi magni in maxime recusandae nam reprehenderit sunt, harum rem illo consectetur rerum ipsum autem, aspernatur quasi vero nemo quas. Magni eveniet ab officiis neque, architecto perspiciatis nisi molestiae veniam dolorem unde earum ipsam aliquam dignissimos minus deserunt ipsa obcaecati sapiente. Repellat facere maiores autem cumque quod dicta atque enim laborum distinctio, alias quas placeat molestiae rerum, quia, cum veritatis rem architecto. Molestiae, recusandae mollitia libero voluptas incidunt dignissimos facere, praesentium nam porro repudiandae sint quos enim sapiente delectus. Est, aut. Eveniet, et?
				</p>
			</MainLayout>
		</>
	)
}