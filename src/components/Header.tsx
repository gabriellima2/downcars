import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

import { NavigationAnchors, NavigationMobile } from "./Navigation";

export const Header = () => {
	return (
		<header className="w-full h-28 flex justify-between items-center px-10">
			<a href="#home" className="flex justify-center items-center">
				<Image src="/logo.svg" width="140px" height="50px" />
			</a>
			<div className="hidden md:flex md:gap-14">
				<NavigationAnchors />
				<a
					href="#"
					className="bg-whatsapp-900 p-2 rounded-full text-black text-xl hover:bg-whatsapp-transparent hover:transition-colors"
				>
					<BsWhatsapp />
				</a>
			</div>

			<div className="md:hidden">
				<NavigationMobile />
			</div>
		</header>
	);
};
