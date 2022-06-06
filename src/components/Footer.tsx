import Image from "next/image";

import { BackToTopButton } from "./Buttons/BackToTopButton";

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => (
	<footer className="flex flex-col items-center px-6 pt-6 pb-5 text-gray-100/40 bg-black border--detail">
		<div className="w-full flex justify-between pb-3 gap-4 flex-wrap">
			<section className="flex flex-col items-start">
				<Image src="/logo.svg" width="160px" height="40px" />
				<small className="capitalize text-gray-100/40">
					oficina mecânica DownCars - {CURRENT_YEAR}
				</small>
			</section>
			<BackToTopButton />
		</div>
		<section className="w-full flex flex-col items-center gap-2 text-xs pt-3 border--detail">
			<p>
				Imagem de{" "}
				<a
					title="Pexels Perfil de Albin Berlin"
					target="_blank"
					href="https://www.pexels.com/pt-br/@albinberlin/"
				>
					<strong>Albin Berlin</strong>
				</a>
			</p>
			<p>
				<strong>
					Feito por{" "}
					<a
						title="GitHub de Gabriel"
						target="_blank"
						href="https://github.com/gabriellima2"
						className="text-gray-100/40"
					>
						Gabriel
					</a>
				</strong>
			</p>
		</section>
	</footer>
);
