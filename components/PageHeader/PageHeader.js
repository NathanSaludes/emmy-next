import PageHeader from "."

export default function Header({ title, children }) {
	return (
		<div className={`bg-opacity-30 flex mb-4 justify-between items-start h-11`}>
			<h1 className={`font-bold h-full text-3xl md:text-4xl text-primary w-1/2`}>
				{title}
			</h1>
			{children &&
				<div className={`bg-opacity-30 flex flex-grow h-full justify-end`}>
					{children}
				</div>
			}
		</div>
	)
}