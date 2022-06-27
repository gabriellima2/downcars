import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Carousel } from "../components/Carousel";
import { MockComponent } from "../__mocks__/components";

jest.setTimeout(15000);

const textsForMockComponent = {
	first: "Test",
	second: "Carousel",
};

async function simulateTimer() {
	await act(async () => {
		await new Promise((r) => setTimeout(r, 4000));
	});
}

describe("Carousel Component", () => {
	let carouselButtons: HTMLButtonElement[];

	beforeEach(() => {
		render(
			<Carousel carouselTitle="Title">
				<MockComponent text={textsForMockComponent.first} />
				<MockComponent text={textsForMockComponent.second} />
			</Carousel>
		);

		carouselButtons = screen.getAllByTestId("carousel-buttons");
	});

	it("should render the first component", () => {
		expect(screen.getByText(textsForMockComponent.first)).toBeInTheDocument();
		expect(carouselButtons[0]).toHaveAttribute("disabled");
		expect(carouselButtons[1]).not.toHaveAttribute("disabled");
	});

	it("should render another component after some time", async () => {
		await simulateTimer();
		expect(screen.getByText(textsForMockComponent.second)).toBeInTheDocument();
	});

	it("should switch between the children of the components", async () => {
		expect(screen.getByText(textsForMockComponent.first)).toBeInTheDocument();
		await simulateTimer();
		expect(screen.getByText(textsForMockComponent.second)).toBeInTheDocument();
		await simulateTimer();
		expect(screen.getByText(textsForMockComponent.first)).toBeInTheDocument();
	});
});
