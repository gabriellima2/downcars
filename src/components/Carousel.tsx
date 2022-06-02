import { ReactNode, useEffect, useState } from "react";
import { BsCircle, BsCircleFill } from "react-icons/bs";

interface CarouselProps {
	children: ReactNode[];
}

export const Carousel = ({ children }: CarouselProps) => {
	const [indexCurrentElement, setIndexCurrentElement] = useState(0);

	useEffect(() => {
		const interval = setInterval(moveCarousel, 4000);

		return () => clearInterval(interval);
	}, []);

	const moveCarousel = () =>
		setIndexCurrentElement((prev) => (prev + 1) % children.length);

	return (
		<div className="flex flex-col items-center gap-5">
			<div>{children[indexCurrentElement]}</div>
			<footer>
				{children.map((element, elementIndex) => (
					<button
						className="text-white text-xs mx-1"
						onClick={() => setIndexCurrentElement(elementIndex)}
					>
						{indexCurrentElement === elementIndex ? (
							<BsCircleFill className="text-blue-500" />
						) : (
							<BsCircle />
						)}
					</button>
				))}
			</footer>
		</div>
	);
};
