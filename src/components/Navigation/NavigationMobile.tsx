import * as Dialog from "@radix-ui/react-dialog";
import { BsXLg } from "react-icons/bs";
import Image from "next/image";

import { NavigationAnchors } from ".";

export const NavigationMobile = () => {
	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<Image src="/menu.svg" width="40px" height="40px" />
			</Dialog.Trigger>

			<Dialog.Overlay className="absolute bg-black" />

			<Dialog.Content className="w-full max-w-[370px] h-full bg-black/95 absolute right-0 top-0 flex flex-col items-center justify-center">
				<Dialog.Close className="absolute right-10 top-10 text-2xl text-white">
					<BsXLg />
				</Dialog.Close>
				<NavigationAnchors />
				<div className="absolute bottom-5">
					<Image src="/logo.svg" width="130px" height="38px" />
				</div>
			</Dialog.Content>
		</Dialog.Root>
	);
};
