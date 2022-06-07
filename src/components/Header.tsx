import Image from "next/image";
import { scrollTop } from "../utils/scrollTop";

import { WhatsappButton } from "./Buttons/WhatsappButton";
import { AnchorsNavigation } from "./Navigation";

interface HeaderProps {
	isScrolling: boolean;
	activateMobileNav: () => void;
}

export const Header = (props: HeaderProps) => {
	return (
		<header
			className={`${
				props.isScrolling && "sticky top-0 z-50 opacity-90"
			} relative bg-[#070707] w-full h-25 flex justify-between items-center px-10 py-5 after:w-full after:h-[1px] after:bg-gray-200-transparent after:absolute after:bottom-0 after:left-0`}
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
				{!props.isScrolling && <WhatsappButton />}
			</div>

			<button
				className="md:hidden"
				onClick={() => {
					scrollTop();
					props.activateMobileNav();
				}}
			>
				<Image src="/menu.svg" width="40px" height="40px" />
			</button>
		</header>
	);
};
