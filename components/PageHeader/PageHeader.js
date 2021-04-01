import PageHeader from "."

export default function Header({ title, children }) {
	return (
		<div className={`bg-opacity-30 block sm:flex mb-3 justify-between items-start min-h-full`}>
			<h1 className={`font-bold h-full text-3xl md:text-4xl text-primary mb-3 sm:m-0`}>
				{title}
			</h1>
			{children &&
				<div className={`bg-opacity-30 flex flex-grow h-full sm:justify-end`}>
					{children}
				</div>
			}
		</div>
	)
}