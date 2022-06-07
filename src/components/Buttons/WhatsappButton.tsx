import { BsWhatsapp } from "react-icons/bs";

export const WhatsappButton = () => (
	<a
		target="_blank"
		href="https://wa.me/5511993456067"
		title="Entrar em contato por Whatsapp"
		tabIndex={0}
		className="bg-whatsapp-900 p-2 rounded-full text-white text-xl hover:bg-whatsapp-transparent hover:text-opacity-80 hover:transition-colors focus:outline-none focus:bg-transparent focus:text-whatsapp-900 focus:ring-2 focus:ring-whatsapp-900/30 focus:ring-offset-2 focus:ring-offset-whatsapp-900/5"
	>
		<BsWhatsapp />
	</a>
);
