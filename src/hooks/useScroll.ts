import { useEffect, useState } from "react";

function getScrollY() {
	return window.scrollY;
}

function addScrollEvent(cb: ScrollEventParam) {
	removeEventListener("scroll", cb);

	window.addEventListener("scroll", cb);

	return () => removeEventListener("scroll", cb);
}

export function useScroll() {
	const [scrollDirection, setScrollDirection] =
		useState<null | ScrollDirectionType>(null);
	const [prevScrollPosition, setPrevScrollPosition] = useState(0);
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => addScrollEvent(handleScrollDirection), [prevScrollPosition]);

	useEffect(() => addScrollEvent(handleScrolling), [isScrolling]);

	const handleScrollDirection = () => {
		const scrollY = getScrollY();

		if (scrollY > prevScrollPosition) {
			setScrollDirection("up");
		} else {
			setScrollDirection("down");
		}

		setPrevScrollPosition(scrollY);
	};

	const handleScrolling = () => {
		const distanceTop = getScrollY();

		if (distanceTop > 10) return setIsScrolling(true);

		setIsScrolling(false);
	};

	return {
		scrollDirection,
		isScrolling,
	};
}
