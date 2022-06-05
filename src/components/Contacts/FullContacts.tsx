import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Contact } from "../../types/components";

type FullContactsProps = Contact;

export const FullContacts = (props: FullContactsProps) => (
	<li title={`Entrar em contato por ${props.title}`}>
		<a
			href={props.href}
			className="flex flex-col items-center gap-4 text-white px-2 py-4 hover:opacity-90  hover:animate-pulse transition-colors"
		>
			<i className="text-4xl">{React.createElement(props.icon, null)}</i>
			<h1 className="text-sm text-gray-200">{props.value}</h1>
		</a>
	</li>
);
