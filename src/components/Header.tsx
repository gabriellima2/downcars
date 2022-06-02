import Image from "next/image";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

import { NavigationAnchors, NavigationMobile } from "./Navigation";

export const Header = () => {
	const [navigationMobileIsActive, setNavigationMobileIsActive] =
		useState(false);

	return (
		<header className="w-full h-28 flex justify-between items-center px-10">
			<a href="#home" className="flex justify-center items-center">
				<Image src="/logo.svg" width="140px" height="50px" />
			</a>
			<div className="hidden md:flex md:gap-5">
				<NavigationAnchors />
				<a
					href="#"
					className="bg-whatsapp-900 p-2 rounded-full text-black text-xl hover:bg-whatsapp-transparent hover:transition-colors focus:outline-none focus:bg-transparent focus:text-whatsapp-900 focus:ring-2 focus:ring-whatsapp-900/30 focus:ring-offset-2 focus:ring-offset-whatsapp-900/5"
				>
					<BsWhatsapp />
				</a>
			</div>

			<button
				className="md:hidden"
				onClick={() => setNavigationMobileIsActive(true)}
			>
				<Image src="/menu.svg" width="40px" height="40px" />
			</button>

			{navigationMobileIsActive && (
				<NavigationMobile
					isActive={navigationMobileIsActive}
					disableSidebar={() => setNavigationMobileIsActive(false)}
				/>
			)}
		</header>
	);
};
