import PageHeader from "."

export default function Header({ title, children }) {
	return (
		<div className={`flex bg-opacity-30 items-end mb-4 justify-between`}>
			<h1 className={`font-bold text-3xl md:text-4xl text-primary w-1/2`}>
				{title}
			</h1>
			{children && <div className={`flex flex-grow justify-end`}>
				{children}
			</div>}
		</div>
	)
}