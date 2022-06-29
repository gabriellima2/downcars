import { ReactNode, useEffect, useState } from "react";
import {
	BsCircle,
	BsCircleFill,
	BsPauseFill,
	BsPlayFill,
} from "react-icons/bs";

interface CarouselProps {
	children: ReactNode[];
	carouselTitle: string;
}

export const Carousel = ({ children, carouselTitle }: CarouselProps) => {
	const [indexCurrentElement, setIndexCurrentElement] = useState(0);
	const [isStopped, setIsStopped] = useState(false);

	let rangeSlider: undefined | NodeJS.Timer = undefined;

	useEffect(() => {
		if (isStopped) return clearInterval(rangeSlider);

		rangeSlider = setInterval(moveCarousel, 4000);

		return () => clearInterval(rangeSlider);
	}, [isStopped]);

	const moveCarousel = () =>
		setIndexCurrentElement((prev) => (prev + 1) % children.length);

	const handleSlider = (action: "stop" | "start") => {
		if (action === "stop") return setIsStopped(true);

		if (action === "start") return setIsStopped(false);
	};

	return (
		<div aria-labelledby="carousel-title">
			<h1 id="carousel-title" className="hidden">
				{carouselTitle}
			</h1>
			<ul className="flex flex-col items-center gap-5">
				<li
					id="banners"
					aria-live="polite"
					aria-atomic="true"
					aria-label={`Item ${indexCurrentElement} de ${children.length}`}
					onMouseEnter={() => handleSlider("stop")}
					onMouseLeave={() => handleSlider("start")}
					onFocus={() => handleSlider("stop")}
					onBlur={() => handleSlider("start")}
					className="flex flex-col items-center gap-6"
				>
					{children[indexCurrentElement]}
				</li>
				<footer aria-controls="banners" className="flex items-center">
					{children.map((element, elementIndex) => (
						<button
							key={Math.random()}
							type="button"
							data-slide={elementIndex}
							disabled={indexCurrentElement === elementIndex}
							onClick={() => setIndexCurrentElement(elementIndex)}
							data-testid="carousel-buttons"
							className="text-white text-[10px] sm:text-xs mx-1"
						>
							{indexCurrentElement === elementIndex ? (
								<BsCircleFill className="text-blue-500" />
							) : (
								<BsCircle />
							)}
							<span className="hidden">Informações da Oficina</span>
						</button>
					))}
					<button
						type="button"
						title={`${isStopped ? "Iniciar" : "Pausar"} animação`}
						data-action={isStopped ? "start" : "stop"}
						aria-pressed={isStopped}
						onClick={() => handleSlider(isStopped ? "start" : "stop")}
						className="text-lg"
					>
						{isStopped ? (
							<>
								<span className="hidden">Ativar slide</span>
								<BsPlayFill />
							</>
						) : (
							<>
								<span className="hidden">Pausar slide</span>
								<BsPauseFill />
							</>
						)}
					</button>
				</footer>
			</ul>
		</div>
	);
};
