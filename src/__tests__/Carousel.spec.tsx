import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Carousel } from "../components/Carousel";
import { MockComponent } from "../__mocks__/components";

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
	beforeEach(() => {
		render(
			<Carousel carouselTitle="Title">
				<MockComponent text={textsForMockComponent.first} />
				<MockComponent text={textsForMockComponent.second} />
			</Carousel>
		);
	});

	it("should render the first component", () => {
		expect(screen.getByText(textsForMockComponent.first)).toBeInTheDocument();
	});

	it("should render another component after some time", async () => {
		await simulateTimer();
		expect(screen.getByText(textsForMockComponent.second)).toBeInTheDocument();
	});
});
