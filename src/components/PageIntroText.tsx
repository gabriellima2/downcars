import { Text } from ".";

interface PageIntroTextProps {
	attr: Text;
}

export const PageIntroText = ({ attr }: PageIntroTextProps) => (
	<header className="flex flex-col items-center gap-3 text-center tracking-wider py-10 px-2 line--detail">
		<small className="text-light-blue-400 capitalize text-xs sm:text-xl font-medium">
			{attr.small}
		</small>
		<h1 className="max-w-[18rem] sm:max-w-lg text-base sm:text-3xl font-semibold text-white">
			{attr.title}
		</h1>
		<p className="max-w-md text-xs sm:text-lg tracking-normal text-gray-200/70 font-medium">
			{attr.subtitle}
		</p>
	</header>
);
