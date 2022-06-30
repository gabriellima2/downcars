import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Carousel } from "../components/Carousel";
import { MockComponent } from "../__mocks__/components";

jest.setTimeout(15000);

const SLIDE_TIMER_IN_MS = 100;

const textsForMockComponent = {
	first: "Test",
	second: "Carousel",
};

async function simulateTimer(): Promise<void> {
	await act(async () => {
		await new Promise((r) => setTimeout(r, SLIDE_TIMER_IN_MS));
	});
}

function clickOnElement(element: HTMLElement) {
	act(() => {
		fireEvent.click(element);
	});
}

describe("Carousel Component", () => {
	beforeEach(() => {
		render(
			<Carousel carouselTitle="Title" slideTime={SLIDE_TIMER_IN_MS}>
				<MockComponent text={textsForMockComponent.first} />
				<MockComponent text={textsForMockComponent.second} />
			</Carousel>
		);
	});

	describe("Render child components", () => {
		it("should render the first child", () => {
			expect(screen.getByText(textsForMockComponent.first)).toBeInTheDocument();
		});

		describe("Rendering with a timer", () => {
			it("should render another child after some time", async () => {
				await simulateTimer();
				expect(
					screen.getByText(textsForMockComponent.second)
				).toBeInTheDocument();
			});

			it("should alternate between the children", async () => {
				expect(
					screen.getByText(textsForMockComponent.first)
				).toBeInTheDocument();
				await simulateTimer();
				expect(
					screen.getByText(textsForMockComponent.second)
				).toBeInTheDocument();
				await simulateTimer();
				expect(
					screen.getByText(textsForMockComponent.first)
				).toBeInTheDocument();
			});
		});

		describe("Navigation buttons", () => {
			const carouselButtonsId = "carousel-buttons";
			const buttonIndexToClick = 1;

			let buttons: HTMLButtonElement[];

			const getCarouselNavigationButtons = (): HTMLButtonElement[] =>
				screen.getAllByTestId(carouselButtonsId);

			beforeEach(() => {
				buttons = getCarouselNavigationButtons();
			});

			it("should disable the button when it is clicked", () => {
				expect(buttons[buttonIndexToClick]).toHaveProperty("disabled", false);

				clickOnElement(buttons[buttonIndexToClick]);

				// Precisa pegar novamento os botões por conta do evento.
				buttons = getCarouselNavigationButtons();

				expect(buttons[buttonIndexToClick]).toHaveProperty("disabled", true);
			});

			it("should make the button available when clicked on another", () => {
				const buttonIndexToBeAvailable = 0;

				expect(buttons[buttonIndexToBeAvailable]).toHaveProperty(
					"disabled",
					true
				);

				clickOnElement(buttons[buttonIndexToClick]);

				// Precisa pegar novamento os botões por conta do evento.
				buttons = getCarouselNavigationButtons();

				expect(buttons[buttonIndexToBeAvailable]).toHaveProperty(
					"disabled",
					false
				);
			});
		});
	});

	describe("Pause Button and Play Button", () => {
		const getPlayButton = (): HTMLButtonElement =>
			screen.getByTitle("Iniciar animação");

		let pauseButton: HTMLButtonElement;
		let playButton: HTMLButtonElement;
		let firstChildElementOfCarousel: HTMLDivElement;

		beforeEach(() => {
			pauseButton = screen.getByTitle("Pausar animação");
			firstChildElementOfCarousel = screen.getByText(
				textsForMockComponent.first
			);
		});

		it("should toggle between pause and start when clicked in", async () => {
			clickOnElement(pauseButton);
			playButton = getPlayButton();

			expect(playButton).toBeInTheDocument();

			await simulateTimer();
			expect(firstChildElementOfCarousel).toBeInTheDocument();

			clickOnElement(playButton);
			expect(pauseButton).toBeInTheDocument();
		});

		it("should pause on mouseover or start on mouseleave", async () => {
			fireEvent.mouseOver(firstChildElementOfCarousel);

			playButton = getPlayButton();
			expect(playButton).toBeInTheDocument();

			await simulateTimer();
			expect(firstChildElementOfCarousel).toBeInTheDocument();

			fireEvent.mouseLeave(firstChildElementOfCarousel);
			expect(pauseButton).toBeInTheDocument();
		});

		it("should pause on focus or start on blur", async () => {
			fireEvent.focus(firstChildElementOfCarousel);

			playButton = getPlayButton();
			expect(playButton).toBeInTheDocument();

			await simulateTimer();
			expect(firstChildElementOfCarousel).toBeInTheDocument();

			fireEvent.blur(firstChildElementOfCarousel);
			expect(pauseButton).toBeInTheDocument();
		});
	});
});
