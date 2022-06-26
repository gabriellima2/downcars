import { contacts } from "../assets";

interface Text {
	small: string;
	title: string;
	subtitle?: string;
}

type Contact = typeof contacts[0];
