import { motion } from 'framer-motion'

const Emotion = ({ value }) => (
	<motion.button
		whileTap={{ scale: 1.2 }}
		className="focus:outline-none"
	>
		<img className="h-16 sm:h-24 md:h-32 mr-1 sm:m-0" src={`/images/emotions/${value}.svg`} alt={value} />
	</motion.button>
)

export default function SentimentSelection() {
	return (
		<div className="flex flex-col items-center" style={{ textShadow: '3px 1px 5px rgba(0, 38, 255, 0.658)' }}>
			<h1 className="font-light text-lg mb-2 md:text-2xl">Hi, Gille!</h1>
			<h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">How are you feeling today?</h2>
			<div className="flex items-center justify-evenly mt-4">
				<Emotion value={1} />
				<Emotion value={2} />
				<Emotion value={3} />
				<Emotion value={4} />
				<Emotion value={5} />
			</div>
			<p className="text-xs font-light mt-4 opacity-80 md:text-base">Select an emotion that best describes what you feel right now.</p>
		</div>
	)
}