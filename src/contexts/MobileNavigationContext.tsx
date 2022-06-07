import { createContext, ReactNode, useState } from "react";

interface ContextProviderProps {
	children: ReactNode;
}

interface MobileNavigationContextData {
	mobileNavIsActive: boolean;
	activateMobileNav: () => void;
	disableMobileNav: () => void;
}

export const MobileNavigationContext = createContext(
	{} as MobileNavigationContextData
);

export function MobileNavigationContextProvider({
	children,
}: ContextProviderProps) {
	const [mobileNavIsActive, setMobileNavIsActive] = useState(false);

	const activateMobileNav = () => setMobileNavIsActive(true);

	const disableMobileNav = () => setMobileNavIsActive(false);

	return (
		<MobileNavigationContext.Provider
			value={{ mobileNavIsActive, activateMobileNav, disableMobileNav }}
		>
			{children}
		</MobileNavigationContext.Provider>
	);
}
