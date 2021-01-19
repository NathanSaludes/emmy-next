import BlueLayout from '@/components/layouts/BlueLayout';
import LoginForm from '@/components/LoginForm';
import Head from 'next/head'

export default function Login() {
	return (
		<BlueLayout>
			<Head>
				<title>Emmy | Login</title>
			</Head>
			<LoginForm />
		</BlueLayout>
	)
}