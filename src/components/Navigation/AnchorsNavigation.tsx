import { useContext } from "react";

import { MobileNavigationContext } from "../../contexts/MobileNavigationContext";

import { anchors } from "../../mocks";

export const AnchorsNavigation = () => {
	const { mobileNavIsActive, disableMobileNav } = useContext(
		MobileNavigationContext
	);

	const handleAnchorClick = () => {
		if (mobileNavIsActive) return disableMobileNav();
	};

	return (
		<nav className="flex items-center">
			<ul className="flex items-center md:gap-5 gap-20 md:flex-row flex-col">
				{anchors.map((anchor) => (
					<li key={anchor.id}>
						<a
							onClick={handleAnchorClick}
							href={anchor.href}
							className="rounded-md text-base md:text-sm tracking-widest font-medium uppercase py-3 px-5 relative after:bg-gradient-to-r after:from-transparent after:to-blue-900/70 after:rounded after:w-0 after:h-full after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all"
						>
							{anchor.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
