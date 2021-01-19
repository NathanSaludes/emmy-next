import { UserIcon } from "@/styles/Icons";
import Link from 'next/link'

import FormInput from './FormInput';

const ErrorMessage = ({ children }) => (
	<span className="text-red-400 text-xs mb-3 leading-normal">
		{children}
	</span>
)

const SubmitButton = ({ label }) => (
	<button className="shadow-sm bg-green-300 text-white w-full px-4 py-3 rounded-lg font-semibold tracking-wider focus:outline-none focus:ring-1 focus:ring-green-400 ring-offset-2" type="submit">
		{label.toUpperCase()}
	</button>
)

const Logo = () => (
	<div className="block md:flex md:justify-center md:w-80 m-auto md:mr-10 object-contain">
		<img
			className="h-16 md:h-24 w-auto"
			src="/images/Emmy.png"
			alt="Emmy"
		/>
	</div>
)

const Form = () => (
	<div className="py-10 w-80 flex flex-col items-center">
		<ErrorMessage>The email or password you provided is invalid.</ErrorMessage>
		<FormInput label="Email" type="email" name="email" />
		<FormInput label="Password" type="password" name="password" />
		<SubmitButton label="login" />
		<Link href="/">
			<a className="font-normal text-sm tracking-tight md:text-xs md:tracking-wide text-center mt-2 text-gray-400 hover:underline">
				Forgot Password
						</a>
		</Link>
	</div>
)

export default function LoginForm() {
	return (
		<div className="bg-white shadow-sm px-4 md:px-10 pt-10 pb-4 rounded-xl">
			<div className="flex flex-col items-center justify-center md:flex-row">
				<Logo />
				<Form />
			</div>
			<p className="text-xs md:text-sm text-gray-400 text-center md:pt-10 mx-3">
				Don't have an account? Please contact your administrator.
			</p>
		</div>
	)
}