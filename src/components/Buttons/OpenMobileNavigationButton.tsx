import Image from "next/image";

import { useMobileNavigationContext } from "../../hooks/useMobileNavigationContext";

export const OpenMobileNavigationButton = () => {
	const { activateMobileNav } = useMobileNavigationContext();

	return (
		<button
			className="md:hidden"
			onClick={activateMobileNav}
			data-testid="open-mobile-nav-button"
		>
			<Image src="/menu.svg" width="40px" height="40px" />
		</button>
	);
};
