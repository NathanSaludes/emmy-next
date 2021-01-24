import BlueLayout from '@/components/layouts/BlueLayout'
import SentimentSelection from '@/components/SentimentSelection'
import Head from 'next/head'

export default function Selection() {
	return (
		<>
			<Head>
				<title>Emmy</title>
			</Head>
			<BlueLayout>
				<SentimentSelection />
			</BlueLayout>
		</>
	)
}