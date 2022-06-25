import Image from "next/image";
import { useContext } from "react";

import { MobileNavigationContext } from "../../contexts/MobileNavigationContext";

export const OpenMobileNavigationButton = () => {
	const { activateMobileNav } = useContext(MobileNavigationContext);

	return (
		<button className="md:hidden" onClick={activateMobileNav}>
			<Image src="/menu.svg" width="40px" height="40px" />
		</button>
	);
};
