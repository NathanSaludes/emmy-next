import styles from './scrollbar.module.scss'

import InputField from './InputField'
import ActionButton from './ActionButton'
import { RiCloseLine } from 'react-icons/ri'

function AddUserForm() {
	return (
		<div className={`flex flex-col items-center bg-dark-denim-accent py-4 rounded-2xl w-96`}>
			{/* <div className="border-2 border-dashed border-red-500 border-opacity-50"> */}
			<div className="flex justify-between items-baseline w-full px-4 pb-3 border-dark-denim-faded">
				<div className="ml-2 font-semibold text-2xl tracking text-main">
					Create New User
				</div>
				<button className="flex justify-center items-center h-9 w-9 bg-emmy-blue-accent bg-opacity-20 rounded-md group hover:bg-opacity-30 focus:outline-none focus:ring-2 shadow-sm">
					<RiCloseLine className="text-2xl text-main group-hover:text-primary" />
				</button>
			</div>
			<div className={`${styles.scroll} input-group flex flex-col w-full max-h-96 overflow-y-auto overflow-x-hidden pl-8 pr-6 mr-3`}>
				<InputField label="First name" type="text" name="" placeholder="" />
				<InputField label="Last name" type="text" name="" placeholder="" />
				<InputField label="Email" type="text" name="" placeholder="" />
				<InputField label="Username" type="text" name="" placeholder="" />
				<InputField label="Account Role" type="text" name="" placeholder="" />
				<InputField label="Password" type="password" name="" placeholder="" />
				<InputField label="Confirm Password" type="password" name="" placeholder="" />
			</div>
			<div className="pt-4 px-4 flex justify-end w-full border-dark-denim-faded border-dark">
				<ActionButton text="Cancel" isSecondary />
				<ActionButton text="Create" type="submit" />
			</div>
			{/* </div> */}
		</div>
	)
}

export default AddUserForm
