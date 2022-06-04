import type { NextPage } from "next";
import { BsChevronCompactDown } from "react-icons/bs";

import { HeadSEO } from "../infra/HeadSEO";

import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { QuickContacts } from "../components/Contacts";

import { banners, contacts } from "../mocks";

const Home: NextPage = () => {
	return (
		<>
			<HeadSEO />

			<main className="flex flex-col justify-between items-center relative bg-home-image-mobile sm:bg-home-image-desktop w-full h-full bg-cover bg-no-repeat bg-center">
				<Header />

				<section className="static sm:absolute bottom-56 md:bottom-52 left-1/2 md:left-[8%] md:-translate-x-0 sm:-translate-x-1/2 flex flex-col items-center gap-2 uppercase text-light-blue">
					<Carousel>
						{banners.map((banner) => (
							<article
								key={banner.id}
								className="flex flex-col items-center sm:gap-6"
							>
								<div className="flex flex-col items-center">
									<span className="text-lg sm:text-2xl md:text-3xl font-light tracking-wider -m-5 sm:-m-3 md:-m-2">
										{banner.smallText}
									</span>
									<h1 className="text-[3.4rem] sm:text-8xl md:text-[7rem] font-medium text-transparent bg-clip-text bg-gradient-to-t from-[#0C2338]/5 via-light-blue/50 to-light-blue">
										{banner.mainText}
									</h1>
								</div>
								<a
									href={banner.button.anchor}
									className="bg-gradient-to-t from-accent-blue-900 via-accent-blue-900/60 to-accent-blue-transparent py-[16px] sm:py-[20px] px-9 sm:px-12 rounded-sm font-bold text-xs sm:text-[1rem] tracking-widest outline--focus hover:opacity-80 hover:transition-all"
								>
									{banner.button.text}
								</a>
							</article>
						))}
					</Carousel>
				</section>

				<footer className="w-full px-10 py-8 flex justify-end">
					<section className="w-full md:w-1/2 flex items-center justify-between gap-5">
						<i className="absolute left-1/2 md:static text-white text-4xl animate-bounce order-3 md:order-1 self-end">
							<BsChevronCompactDown />
						</i>
						<div className="text-light-blue tracking-wider self-end order-2">
							<h1 className="text-2xl sm:text-3xl font-bold">
								+10<span className="uppercase text-sm sm:text-base">anos</span>
							</h1>
							<small className="text-xs sm:text-sm capitalize font-light">
								de experiência
							</small>
						</div>
						<section className="self-end order-3 md:order-2">
							<ul className="flex items-end gap-2 flex-col md:flex-row">
								{contacts.map((contact) => (
									<QuickContacts
										key={contact.id}
										href={contact.href}
										title={contact.title}
										icon={contact.icon}
									/>
								))}
							</ul>
						</section>
					</section>
				</footer>
			</main>
		</>
	);
};

export default Home;
