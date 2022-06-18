import { BsChevronCompactUp } from "react-icons/bs";

export const BackToTopButton = () => {
	const scrollTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<button
			type="button"
			title="Voltar para o topo"
			aria-label="Voltar para o topo"
			onClick={scrollTop}
			className="h-fit bg-gray-200-transparent/10 px-2 py-1 text-2xl rounded-md hover:opacity-80"
		>
			<BsChevronCompactUp />
		</button>
	);
};
