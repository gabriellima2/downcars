import type { NextPage } from "next";

import { HeadSEO } from "../infra/HeadSEO";

import { Header } from "../components/Header";

const Home: NextPage = () => {
	return (
		<>
			<HeadSEO />

			<main className="bg-home-image w-full h-full bg-cover bg-no-repeat bg-center">
				<Header />
			</main>
		</>
	);
};

export default Home;
