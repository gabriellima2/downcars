import { useContext } from "react";

import { MobileNavigationContext } from "../contexts/MobileNavigationContext";

export const useMobileNavigationContext = () =>
	useContext(MobileNavigationContext);
