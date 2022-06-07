import React from "react";

import { Contact } from "../../types/components";

type FullContactsProps = Contact;

export const FullContacts = (props: FullContactsProps) => (
	<li
		title={`Entrar em contato por ${props.title}`}
		className="relative hover:bg-black/20 py-2 px-1 rounded-lg after:w-0 after:h-[2px] after:bg-gray-200-transparent after:rounded-full after:absolute after:bottom-0 after:left-0 hover:after:w-full hover:after:transition-all"
	>
		<a
			target="_blank"
			href={props.href}
			className="flex flex-col items-center gap-4 text-white px-2 py-4"
		>
			<i className="bg-blue-600/80 animate-pulse p-3 rounded-full text-4xl">
				{React.createElement(props.icon, null)}
			</i>
			<h1 className="whitespace-nowrap text-sm text-gray-200">{props.value}</h1>
		</a>
	</li>
);
