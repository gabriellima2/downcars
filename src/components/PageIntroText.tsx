import { Text } from "../types/components";

interface PageIntroTextProps {
	attr: Text;
}

export const PageIntroText = ({ attr }: PageIntroTextProps) => (
	<header>
		<small>{attr.small}</small>
		<h1>{attr.title}</h1>
		<h2>{attr.subtitle}</h2>
	</header>
);
