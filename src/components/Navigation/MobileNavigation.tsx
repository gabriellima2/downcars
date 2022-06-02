import { Dialog } from "@headlessui/react";
import { BsXLg } from "react-icons/bs";
import Image from "next/image";

import { AnchorsNavigation } from ".";

interface NavigationMobileProps {
	isActive: boolean;
	disableSidebar: () => void;
}

export const MobileNavigation = ({
	isActive,
	disableSidebar,
}: NavigationMobileProps) => {
	return (
		<Dialog open={isActive} onClose={disableSidebar} className="md:hidden z-50">
			<Dialog.Panel className="w-full max-w-[370px] h-full bg-black/95 absolute right-0 top-0 flex flex-col items-center justify-center">
				<Dialog.Title>Side Navigation</Dialog.Title>
				<button
					onClick={disableSidebar}
					className="absolute right-10 top-10 text-2xl text-white"
				>
					<BsXLg />
				</button>

				<section>
					<AnchorsNavigation />
				</section>

				<footer className="absolute bottom-5">
					<Image src="/logo.svg" width="130px" height="38px" />
				</footer>
			</Dialog.Panel>
		</Dialog>
	);
};
