import Image from "next/image";
import { useState } from "react";

import { Whatsapp } from "./Buttons/Whatsapp";
import { AnchorsNavigation, MobileNavigation } from "./Navigation";

interface HeaderProps {
	isScrolling: boolean;
}

export const Header = (props: HeaderProps) => {
	const [mobileNavigationIsActive, setMobileNavigationIsActive] =
		useState(false);

	return (
		<header
			className={`${
				props.isScrolling && "sticky top-0 z-50 opacity-95"
			} relative bg-[#070707] w-full h-25 flex justify-between items-center px-10 py-5 after:w-full after:h-[1px] after:bg-gray-200-transparent after:absolute after:bottom-0 after:left-0`}
		>
			<a href="#home" className="flex justify-center items-center">
				<Image src="/logo.svg" width="140px" height="50px" />
			</a>
			<div className="hidden md:flex md:gap-5">
				<AnchorsNavigation />
				{!props.isScrolling && <Whatsapp />}
			</div>

			<button
				className="md:hidden"
				onClick={() => setMobileNavigationIsActive(true)}
			>
				<Image src="/menu.svg" width="40px" height="40px" />
			</button>

			{mobileNavigationIsActive && (
				<MobileNavigation
					isActive={mobileNavigationIsActive}
					disableSidebar={() => setMobileNavigationIsActive(false)}
				/>
			)}
		</header>
	);
};
