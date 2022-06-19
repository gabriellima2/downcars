import Image from "next/image";

import { BackToTopButton } from "./Buttons/BackToTopButton";

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => (
	<footer className="flex flex-col items-center pt-6 text-gray-100/40 bg-[#141414] border--detail">
		<section className="w-full flex items-center justify-between pb-3 px-6 sm:px-16 gap-4 flex-wrap">
			<div className="flex flex-col items-start">
				<Image src="/logo.svg" width="130px" height="40px" />
				<small className="capitalize text-gray-100/40 -mt-2 text-xs sm:text-sm">
					oficina mecânica DownCars - {CURRENT_YEAR}
				</small>
			</div>
			<BackToTopButton />
		</section>
		<section className="w-full flex flex-row justify-between items-center gap-1 bg-black py-2 px-6 sm:px-16 text-xs">
			<small className="font-medium">
				Feito por{" "}
				<a
					title="GitHub de Gabriel"
					target="_blank"
					href="https://github.com/gabriellima2"
					className="text-gray-100/40 hover:underline"
				>
					Gabriel
				</a>
			</small>
			<small>
				Imagem de{" "}
				<a
					title="Pexels Perfil de Albin Berlin"
					target="_blank"
					href="https://www.pexels.com/pt-br/@albinberlin/"
					className="hover:underline"
				>
					<strong>Albin Berlin</strong>
				</a>
			</small>
		</section>
	</footer>
);
