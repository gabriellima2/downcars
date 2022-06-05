import React from "react";

import { Contact } from "../../types/components";

type QuickContactsProps = Pick<Contact, "href" | "title" | "icon">;

export const QuickContacts = (props: QuickContactsProps) => (
	<li className="p-2">
		<a
			href={props.href}
			title={`Link para contato de ${props.title}`}
			className="hover:text-light-blue-400"
		>
			<i className="text-xl text-white hover:opacity-60">
				{React.createElement(props.icon, null)}
			</i>
		</a>
	</li>
);
