import InputField from './InputField'
import ActionButton from './ActionButton'
import { RiCloseLine } from 'react-icons/ri'

function AddUserForm() {
	return (
		<div className={`bg-dark-denim-accent px-8 py-5 rounded-2xl`}>
			<div className="flex flex-col items-center border-2 border-dashed border-red-500 border-opacity-0 w-80 sm:w-96">
				<div className="flex justify-between items-baseline w-full">
					<div className="font-semibold text-2xl tracking text-main">
						Create New User
					</div>
					<button className="flex justify-center items-center h-9 w-9 bg-emmy-blue-accent bg-opacity-20 rounded-md group hover:bg-opacity-30 focus:outline-none focus:ring-2">
						<RiCloseLine className="text-2xl text-main group-hover:text-primary" />
					</button>
				</div>
				<div className="input-group flex flex-col w-full">
					<InputField label="First name" type="text" name="" placeholder="" />
					<InputField label="Last name" type="text" name="" placeholder="" />
					<InputField label="Email" type="text" name="" placeholder="" />
					<InputField label="Username" type="text" name="" placeholder="" />
				</div>
				<div className="mt-8 flex justify-end w-full">
					<ActionButton text="Cancel" isSecondary />
					<ActionButton text="Create" type="submit" />
				</div>
			</div>
		</div>
	)
}

export default AddUserForm
