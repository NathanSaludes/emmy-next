import BlueLayout from '@/components/layouts/BlueLayout';
import Head from 'next/head';
import WelcomeScreen from '@/components/WelcomeScreen';

export default function Welcome() {
	return (
		<BlueLayout>
			<Head>
				<title>Emmy</title>
			</Head>
			<WelcomeScreen />
		</BlueLayout>
	)
}
