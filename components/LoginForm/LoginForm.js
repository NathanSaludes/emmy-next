import Link from 'next/link'
import Image from 'next/image'
import { HiLockClosed, HiUser } from 'react-icons/hi';

import FormInput from './FormInput';

const ErrorMessage = ({ children }) => (
	<span className="text-red-400 text-xs mb-3 leading-normal">
		{children}
	</span>
)

const SubmitButton = ({ label }) => (
	<button
		className="shadow-sm bg-green-300 text-white w-full px-4 py-3 rounded-lg font-semibold tracking-wider focus:outline-none focus:ring-1 focus:ring-green-400 ring-offset-2 transition-all transform hover:scale-105"
		type="submit"
	>
		{label.toUpperCase()}
	</button>
)

const Logo = () => (
	<div className="block md:flex md:justify-start md:w-72 m-auto md:mr-7 object-contain flex-shrink-0">
		<img
			className="h-16 md:h-24 w-auto"
			src="/images/Emmy.png"
			alt="Emmy"
		/>
	</div>
)

const Form = () => (
	<form className="py-10 w-80 flex flex-col items-center">
		<ErrorMessage>The email or password you provided is invalid.</ErrorMessage>
		<FormInput
			label="Email"
			type="email"
			name="email"
			icon={<HiUser />}
		/>
		<FormInput
			label="Password"
			type="password"
			name="password"
			icon={<HiLockClosed />}
		/>
		<SubmitButton label="login" />
		<Link href="/">
			<a className="font-normal text-sm tracking-tight md:text-xs md:tracking-wide text-center mt-2 text-gray-400 hover:underline">
				Forgot your password?
			</a>
		</Link>
	</form>
)

export default function LoginForm() {
	return (
		<>
			<div className="flex flex-col items-center bg-white shadow-sm px-4 md:px-12 pt-14 pb-4 rounded-xl">
				<div className="flex flex-col items-center justify-center md:flex-row">
					<Logo />
					<Form />
				</div>
				<p className="text-xs text-gray-400 text-center md:pt-10 mx-3">
					Don't have an account? Please contact your administrator.
				</p>

			</div>
			<a className="mt-4 opacity-75 transition-opacity hover:opacity-100 flex justify-center text-sm" href="https://iacademy.edu.ph" target="_blank" rel="noopener noreferrer">
				<img className="mr-2 h-5" src="/images/iACADEMY_Seal.svg" alt="iACADEMY" />
				www.iacademy.edu.ph
			</a>
		</>
	)
}