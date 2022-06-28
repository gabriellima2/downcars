import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Carousel } from "../components/Carousel";
import { MockComponent } from "../__mocks__/components";

jest.setTimeout(15000);

const textsForMockComponent = {
	first: "Test",
	second: "Carousel",
};

async function simulateTimer(): Promise<void> {
	await act(async () => {
		await new Promise((r) => setTimeout(r, 4000));
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
			<Carousel carouselTitle="Title">
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
			const getCarouselNavigationButtons = (): HTMLButtonElement[] =>
				screen.getAllByTestId("carousel-buttons");

			let buttons: HTMLButtonElement[];
			const buttonIndexToClick = 1;

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
				let buttonIndexToBeAvailable = 0;
				expect(buttons[buttonIndexToBeAvailable]).toHaveProperty(
					"disabled",
					true
				);

				clickOnElement(buttons[buttonIndexToClick]);

				buttons = screen.getAllByTestId("carousel-buttons");
				expect(buttons[buttonIndexToBeAvailable]).toHaveProperty(
					"disabled",
					false
				);
			});
		});
	});

	describe("Pause and Play", () => {});
});
