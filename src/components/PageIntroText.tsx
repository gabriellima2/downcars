import { Text } from "../types/components";

interface PageIntroTextProps {
	attr: Text;
}

export const PageIntroText = ({ attr }: PageIntroTextProps) => (
	<header className="flex flex-col items-center gap-3 text-center tracking-wider py-10 px-2 after:w-1/12 after:max-w-[100px] after:min-w-[50px] after:h-0.5 after:bg-gray-200-transparent">
		<small className="text-light-blue-400 capitalize text-xl font-medium">
			{attr.small}
		</small>
		<h1 className="max-w-lg text-3xl font-semibold">{attr.title}</h1>
		<h2 className="max-w-md text-lg tracking-normal text-gray-200/70 font-medium">
			{attr.subtitle}
		</h2>
	</header>
);
