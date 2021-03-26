import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

function Modal({ children }) {

	const [isBrowser, setIsBrowser] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		setIsBrowser(true)
	}, [])

	if (isBrowser) {
		return ReactDom.createPortal(
			<>
				<div className={`fixed top-0 left-0 z-50 ${isOpen ? 'flex flex-col' : 'hidden'} justify-center items-center min-h-full min-w-full bg-black bg-opacity-70  text-primary shadow-lg`}>
					{children}
				</div>
			</>,
			document.getElementById("modal-root")
		)
	} else {
		return null;
	}
}

export default Modal
