import Image from "next/image";

import { useScroll } from "../hooks/useScroll";

import { WhatsappButton } from "./Buttons/WhatsappButton";
import { AnchorsNavigation } from "./Navigation";

interface HeaderProps {
	activateMobileNav: () => void;
}

export const Header = ({ activateMobileNav }: HeaderProps) => {
	const { isScrolling, scrollDirection } = useScroll();

	return (
		<header
			className={`${
				scrollDirection === "down" ? "top-0" : "-top-44"
			} bg-[#070707f3] sticky top-0 z-50 w-full h-25 transition-all duration-500 flex justify-between items-center px-10 py-5 after:w-full after:h-[1px] after:bg-gray-200-transparent after:absolute after:bottom-0 after:left-0`}
		>
			<a href="#home" className="flex justify-center items-center">
				<Image
					src="/logo.svg"
					alt="Logo DownCars com cor branca e icone de ferramenta"
					width="140px"
					height="50px"
				/>
			</a>
			<div className="hidden md:flex md:gap-5">
				<AnchorsNavigation />

				{!isScrolling && <WhatsappButton />}
			</div>

			{isScrolling && (
				<span className="flex fixed bottom-6 right-6">
					<WhatsappButton />
				</span>
			)}

			<button className="md:hidden" onClick={activateMobileNav}>
				<Image src="/menu.svg" width="40px" height="40px" />
			</button>
		</header>
	);
};
