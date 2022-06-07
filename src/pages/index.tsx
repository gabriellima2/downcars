import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import {
	BsArrowDown,
	BsArrowDownRight,
	BsChevronCompactDown,
} from "react-icons/bs";

import { HeadSEO } from "../infra/HeadSEO";

import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { PageIntroText } from "../components/PageIntroText";
import { FullContacts, QuickContacts } from "../components/Contacts";
import { WhatsappButton } from "../components/Buttons/WhatsappButton";
import { Footer } from "../components/Footer";

import { banners, contacts, services } from "../mocks";
import { MobileNavigation } from "../components/Navigation";

const Home: NextPage = () => {
	const [isScrolling, setIsScrolling] = useState(false);
	const [mobileNavIsActive, setMobileNavIsActive] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		const distanceTop = document.documentElement.scrollTop;

		if (distanceTop > 0) return setIsScrolling(true);

		setIsScrolling(false);
	};

	return (
		<>
			<HeadSEO />
			<Header
				isScrolling={isScrolling}
				activateMobileNav={() => setMobileNavIsActive(true)}
			/>

			{mobileNavIsActive && (
				<MobileNavigation
					isActive={mobileNavIsActive}
					disableSidebar={() => setMobileNavIsActive(false)}
				/>
			)}

			<main
				id="home"
				className="flex flex-col justify-between bg-home-image-mobile sm:bg-home-image-desktop w-full h-[90vh] bg-cover bg-no-repeat bg-center"
			>
				<section className="flex flex-col items-center lg:items-start justify-end lg:pl-32 mb-20 h-full uppercase text-light-blue-400">
					<Carousel carouselTitle="Informações da Oficina">
						{banners.map((banner) => (
							<React.Fragment key={banner.id}>
								<div className="flex flex-col items-center">
									<small className="text-lg sm:text-2xl md:text-3xl font-light tracking-wider -m-5 sm:-m-3 md:-m-2">
										{banner.smallText}
									</small>
									<h1 className="text-[3.4rem] sm:text-8xl md:text-[7rem] font-medium text-transparent bg-clip-text bg-gradient-to-t from-[#000000]/5 via-blue-400/40 to-light-blue-400">
										{banner.mainText}
									</h1>
								</div>
								<a
									title={`Ir para ${banner.button.text}`}
									href={banner.button.anchor}
									className="w-fit flex items-center gap-2 sm:gap-4 bg-blue-700 rounded-md font-bold py-2 px-4 sm:px-6 text-xs sm:text-[1rem] tracking-widest outline--focus hover:bg-blue-800 hover:opacity-90 hover:transition-all"
								>
									{banner.button.text}
									<BsArrowDownRight className="bg-blue-800 p-1 sm:p-2 w-7 sm:w-10 h-7 sm:h-10 rounded-md" />
								</a>
							</React.Fragment>
						))}
					</Carousel>
				</section>

				<footer className="w-full px-10 py-8 flex justify-end">
					<section className="w-full md:w-1/2 flex items-center justify-between gap-5">
						<i className="absolute left-1/2 md:static text-white text-4xl animate-bounce order-3 md:order-1 self-end">
							<BsChevronCompactDown />
						</i>
						<div className="text-light-blue-100 tracking-wider self-end order-2">
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

			<div>
				{isScrolling && (
					<span className="flex fixed bottom-8 right-8">
						<WhatsappButton />
					</span>
				)}

				<section
					id="services"
					className="h-auto md:bg-services-image bg-cover bg-center bg-no-repeat bg-black text-light-blue-100 px-2"
				>
					<PageIntroText
						attr={{
							small: "serviços",
							title: "Transparência e Confiança define nossos serviços",
							subtitle:
								"Esses são alguns de nossos principais serviços, para mais informações entre em contato!",
						}}
					/>

					<section className="h-auto flex flex-col items-center line--detail">
						<ul className="min-h-[300px] flex md:flex-row flex-col items-center gap-20 px-5">
							{services.map((service) => (
								<li
									key={service.id}
									tabIndex={0}
									className={`${
										service.id !== 1 && "self-start"
									} flex flex-col items-center gap-3 text-white text-center`}
								>
									<i className="text-3xl sm:text-4xl">
										{React.createElement(service.icon, null)}
									</i>
									<h1 className="text-base sm:text-xl font-semibold tracking-wider">
										{service.title}
									</h1>
									<p className="max-w-[300px] text-sm sm:text-base font-medium text-gray-100">
										{service.description}
									</p>
								</li>
							))}
						</ul>
					</section>

					<footer className="mt-10 sm:mt-0 text-center flex items-center flex-col gap-3 p-5">
						<p className="flex flex-col text-sm sm:text-base">
							É o que precisa?
							<strong>Peça um orçamento!</strong>
						</p>
						<i className="text-xl sm:text-2xl">
							<BsArrowDown />
						</i>
					</footer>
				</section>

				<section
					id="contacts"
					className="bg-contacts-mobile md:bg-contacts-desktop bg-cover bg-center bg-no-repeat"
				>
					<PageIntroText
						attr={{
							small: "contatos",
							title: "Entre em contato conosco e peça um orçamento",
						}}
					/>

					<section className="flex flex-col items-center px-14 pb-10">
						<ul className="w-full sm:w-fit flex items-center flex-col sm:flex-row gap-10 md:gap-32 sm:gap-20">
							{contacts.map((contact) => (
								<FullContacts {...contact} key={contact.id} />
							))}
						</ul>
					</section>
				</section>
			</div>

			<Footer />
		</>
	);
};

export default Home;
