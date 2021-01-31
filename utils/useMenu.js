import { useCallback } from 'react';
import { useEffect, useState, useContext, createContext } from 'react';
import debounce from './debounce';

const MenuContext = createContext();
const LG_WIDTH = 1024;

function useMenu() {
	const [isOpen, setIsOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	/* -----------------------------------------------------------------
	Refactored by Alexander Marinas:
	implemented useCallback hook for methods to improve performance since
	we are just returning the same identity of the function.
	----------------------------------------------------------------- */

	// checks if the device screen width is greater mobile devices (1024px)
	const handleResize = useCallback(debounce(() => {
		setIsMobile(window.innerWidth > LG_WIDTH ? false : true);
	}, 150), [])

	const toggleMenu = useCallback(() => {
		setIsOpen(current => !current)
	}, [])

	/* -----------------------------------------------------------------
	Side Effect: Close the menu if screen size changes.
	----------------------------------------------------------------- */
	useEffect(() => {
		setIsOpen(false)
	}, [isMobile])

	/* -----------------------------------------------------------------
	Menu Issue:
	Menu breaks when initial page loaded on mobile screen width (< 425px)

	Solution:
	Invoke `handleResize` function first inside use effect to check
	device screen width on mount.
	------------------------------------------------------------------ */
	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize)
	}, [handleResize])

	return { isOpen, toggleMenu, isMobile }
}

export function MenuProvider({ children }) {
	const menu = useMenu();
	return (
		<MenuContext.Provider value={menu}>
			{children}
		</MenuContext.Provider>
	)
}

export const useMenuContext = () => {
	return useContext(MenuContext);
}