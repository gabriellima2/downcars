import React from "react";

import { Contact } from "../../types/components";

type QuickContactsProps = Pick<Contact, "href" | "title" | "icon">;

export const QuickContacts = (props: QuickContactsProps) => (
	<li className="p-2">
		<a href={props.href} title={`Link para contato de ${props.title}`}>
			<i className="text-xl text-white">
				{React.createElement(props.icon, null)}
			</i>
		</a>
	</li>
);
