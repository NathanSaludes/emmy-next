import { useEffect, useState, useContext, createContext } from 'react';

const MenuContext = createContext();
const LG_WIDTH = 1023;

function useMenu() {
	const [open, setOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false)

	function handleResize() {
		if (window.innerWidth > LG_WIDTH) {
			setOpen(() => true);
			setIsMobile(() => false)
		} else {
			setOpen(() => false)
			setIsMobile(() => true)
		}
	}

	function toggleMenu() {
		setOpen(current => !current)
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return (() => {
			window.removeEventListener('resize', handleResize)
		})

	}, [])

	return { open, toggleMenu, isMobile }
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