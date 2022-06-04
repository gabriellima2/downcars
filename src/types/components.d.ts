import { contacts } from "../mocks/";

interface Text {
	small: string;
	title: string;
	subtitle?: string;
}

type Contact = typeof contacts[0];
