import type { NextPage } from "next";

import { HeadSEO } from "../infra/HeadSEO";

import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";

import banners from "../mocks/banners.json";
import { Popover } from "@headlessui/react";
import { BsTelephone } from "react-icons/bs";

const Home: NextPage = () => {
	return (
		<>
			<HeadSEO />

			<main className="flex flex-col justify-between relative bg-home-image w-full h-full bg-cover bg-no-repeat bg-center">
				<Header />

				<section className="absolute bottom-52 left-[8%] flex flex-col items-center gap-2 uppercase text-light-blue">
					<Carousel>
						{banners.map((banner) => (
							<article className="flex flex-col items-center">
								<div className="flex flex-col items-center">
									<span className="text-3xl font-light tracking-wider -m-8">
										{banner.smallText}
									</span>
									<h1 className="text-[7rem] font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-t from-[#0C2338]/5 via-light-blue/50 to-light-blue">
										{banner.mainText}
									</h1>
								</div>
								<a
									href={banner.button.anchor}
									className="bg-gradient-to-t from-accent-blue-900 via-accent-blue-900/60 to-accent-blue-transparent py-[18px] px-12 rounded-sm font-bold text-1xl tracking-widest outline--focus hover:opacity-80 hover:transition-all"
								>
									{banner.button.text}
								</a>
							</article>
						))}
					</Carousel>
				</section>
			</main>
		</>
	);
};

export default Home;
