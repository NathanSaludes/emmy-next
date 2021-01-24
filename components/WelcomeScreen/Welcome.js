export default function Welcome() {
	return (
		<div className="flex flex-col items-center">
			<img className="h-40 lg:h-48 mb-4" src="/images/iACADEMY_Seal.svg" alt="iACADEMY" />
			<div className="flex justify-center items-center mb-4" style={{ textShadow: '3px 1px 2px rgba(0, 38, 255, 0.658)' }}>
				<h1 className="text-6xl lg:text-7xl font-bold mr-4 tracking-tight flex-shrink-0">Good Morning!</h1>
				<img className="h-14 lg:h-16 mb-2" src="/images/morning.svg" alt="morning" />
			</div>
			<p className="text-lg lg:text-xl font-medium tracking-tight bg-blue-700 px-4 py-2 rounded-lg">Please log your attendance using the scanner.</p>
		</div>
	)
}