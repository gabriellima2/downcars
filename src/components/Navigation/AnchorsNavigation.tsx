import { useState } from "react";

import { anchors } from "../../mocks";

export const AnchorsNavigation = () => {
	const [activeAnchor, setActiveAnchor] = useState("#home");

	return (
		<nav className="flex items-center">
			<ul className="flex items-center md:gap-5 gap-20 md:flex-row flex-col">
				{anchors.map((anchor) => (
					<li>
						<a
							href={anchor.href}
							onClick={() => setActiveAnchor(anchor.href)}
							aria-current={activeAnchor === anchor.href && "page"}
							className={`${
								activeAnchor === anchor.href &&
								"bg-blue-700 after:bg-transparent"
							} rounded-md text-base md:text-sm tracking-widest font-medium uppercase py-3 px-5 relative after:bg-accent-blue-transparent after:rounded after:w-0 after:h-[2px] after:absolute after:bottom-0 after:left-0 hover:after:w-full hover:after:transition-all`}
						>
							{anchor.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
